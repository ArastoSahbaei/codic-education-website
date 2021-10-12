import { useState, useReducer, useEffect } from 'react'
import { EmployeeForm } from './EmployeeForm'
import styled from 'styled-components'
import CodicAPIService from 'shared/api/services/CodicAPIService'

const formReducer = (state: any, event: { name?: any; value?: any }) => {
	return {
		...state,
		[event.name]: event.value
	}
}

export const DeleteEmployee = (props: { employee: any, setChoice: (value: number) => void }) => {
	const { startEmployeeDate, lastEmployeeDate, isEmploymentActive } = props.employee.employeeInformation
	const [formData, setFormData] = useReducer(formReducer,
		{
			firstName: props.employee.firstName,
			lastName: props.employee.lastName,
			dateOfBirth: props.employee.dateOfBirth,
			email: props.employee.email,
			mobile: props.employee.mobile,
			startEmployeeDate: startEmployeeDate,
			lastEmployeeDate: lastEmployeeDate,
			isEmploymentActive: isEmploymentActive,
		})
	const [submitting, setSubmitting] = useState<boolean>(false)
	const [errorMessage, setErrorMessage] = useState<string>('')
	const [confirmMessage, setConfirmMessage] = useState<string>('')
	const messageTime = 5000
	const buttonText = 'Radera'

	useEffect(() => {
		return () => clearTimeout()
	})

	const deleteEmployeeInDB = async (event: { preventDefault: () => void }) => {
		event.preventDefault()
		setSubmitting(true)
		try {
			await CodicAPIService.deleteEmployee(props.employee._id)
			setSubmitting(false)
			setConfirmMessage('Den anställde är raderade ur databasen')
			setTimeout(() => {
				setConfirmMessage('')
				props.setChoice(4)
			}, 1000)
		} catch (error) {
			setSubmitting(false)
			if (error instanceof Error) {
				setErrorMessage('Det gick inte att radera den anställdes information ur databasen - ' + error.message)
			}
			setTimeout(() => {
				setErrorMessage('')
			}, messageTime)
		}
	}


	return (
		<Wrapper>
			<h1>Radera en anställd</h1>
			<Warning>
				Är du helt säker på att du verkligen vill radera denna anställde, tryck på &lsquo;Radera&lsquo;-knappen. <br />
				Men tänk på: Rör det sig om en anställning som avslutats, ska du använda dig av &lsquo;Uppdatera&lsquo; i stället (meny ovan) 
			</Warning>
			<EmployeeForm formData={formData} setFormData={setFormData} buttonText={buttonText}
				submitting={submitting} onSubmit={deleteEmployeeInDB} readonly={true} />
			<br />
			{submitting && <Span>Kontakt med databasen pågår ... </Span>}
			{!submitting && <ErrorSpan>{errorMessage}</ErrorSpan>}
			{!submitting && <Span>{confirmMessage}</Span>}
			<br />
		</Wrapper>

	)
}

const Wrapper = styled.div`
	padding: 5px 20px;
	h1 {
		text-align: center;
		margin-bottom: 10px;
	}
`

const Warning = styled.p`
	color: red;
	padding: 5px;
	margin-bottom: 10px;
	border: 3px solid red;
`

const ErrorSpan = styled.span`
	display:block;
	color: red;
	margin-left: 50px;
`

const Span = styled.span`
	display: block;
	margin-left: 50px;
`