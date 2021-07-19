import { useCallback, useContext, useMemo, useState } from 'react'
import styled from 'styled-components'
import { ProductList } from './components/product-list/productList'
import { UserContext } from '../../shared/providers/UserProvider'
import { useCart } from 'hooks/useCart'
import { Product } from 'shared/interfaces/ProductsInterface'
import { IForm, IInputFieldError, TInputValue } from 'shared/interfaces/form'
import { useFormRender } from 'hooks/form/useFormRender'
import { fieldNotEmpty, getErrorsFromForm } from 'functions/formValidation'
import { Button } from 'components/html/Button'

const initialState: IForm = {
	firstname: {
		value: '',
		defaultValue: '',
		label: 'First name',
		inputType: 'text',
		name: 'firstname',
		validator: fieldNotEmpty,
	},
	lastname: {
		value: '',
		defaultValue: '',
		label: 'Last name',
		inputType: 'text',
		name: 'lastname',
		validator: fieldNotEmpty,
	},
	shippingCity: {
		value: '',
		defaultValue: '',
		label: 'City',
		inputType: 'text',
		name: 'shippingCity',
		validator: fieldNotEmpty,
	},
	shippingStreet: {
		value: '',
		defaultValue: '',
		label: 'Street',
		inputType: 'text',
		name: 'shippingStreet',
		validator: fieldNotEmpty,
	},
	shippingPostalCode: {
		value: '',
		defaultValue: '',
		label: 'Postal Code',
		inputType: 'text',
		name: 'shippingPostalCode',
		validator: fieldNotEmpty,
	},
	method: {
		value: '',
		defaultValue: 'Postnord',
		options: ['Postnord', 'DHL'],
		label: 'Shipping type',
		inputType: 'select',
		name: 'method',
		validator: fieldNotEmpty,
	},
}

export const CheckoutView = () => {
	const [authenticatedUser] = useContext(UserContext)
	const products = authenticatedUser?.shoppingCart?.products
	const { removeFromCart } = useCart()

	const [formState, setFormState] = useState<IForm>(initialState)
	const [isLoading, setIsLoading] = useState<boolean>(false)

	const { renderFields } = useFormRender()

	const onRemove = async (productId: string) => await removeFromCart(productId)

	const data = useMemo(
		() => ({
			productIds: products.map((product: Product) => product._id).join(','),
			userId: authenticatedUser._id,
			form: formState,
		}),
		[formState, authenticatedUser, products]
	)

	const onClickButton = useCallback(async () => {
		const dataToSend = encodeURIComponent(btoa(JSON.stringify(data)))

		setIsLoading(true)
		// TODO: save this url in some configuration or something.
		window.location.href = `http://localhost:3001/payment/create-order/${dataToSend}`
	}, [data, setIsLoading])

	const onFieldChange = useCallback(
		(name: string, value: TInputValue) => {
			const formField = formState[name]
			formField.value = value
			setFormState(Object.assign({ ...formState }, { [name]: formField }))
		},
		[setFormState]
	)

	const renderedFields = useMemo(
		() => renderFields(Object.values(formState), onFieldChange),
		[formState]
	)

	const errors: IInputFieldError[] = useMemo(() => getErrorsFromForm(formState), [formState])
	const hasErrors: boolean = useMemo(() => errors.length > 0, [errors])

	return (
		<Wrapper>
			<Section>
				<Headline>Steg 1 - Din kundvagn</Headline>
				<ProductList products={products} onRemove={onRemove} />
			</Section>

			<Section>
				<Headline>Steg 2 - Leverans</Headline>
				<Form>{renderedFields}</Form>
			</Section>
			<Section>
				<Headline>Steg 3 - Klar</Headline>
				<Button
					text="Complete Order"
					onClick={onClickButton}
					isLoading={isLoading}
					disabled={hasErrors}
				/>
				{hasErrors && <ErrorText>Vänligen fyll i alla uppgifter</ErrorText>}
			</Section>
		</Wrapper>
	)
}

const ErrorText = styled.i`
  margin-top: 1rem;
  display: block;
`

const Form = styled.div`
  width: 100%;
`

const Wrapper = styled.div`
  width: 60vw;
  margin: auto;
  padding-bottom: 1rem;
`

const Section = styled.section`
  width: 100%;
`

const Headline = styled.h2`
  width: 100%;
  text-align: center;
  height: 6rem;
  display: flex;
  justify-content: center;
  align-items: center;
`
