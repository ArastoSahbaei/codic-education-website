import { useState, useReducer, useEffect } from 'react'
import { EmployeeForm } from './EmployeeForm'
import styled from 'styled-components'
import CodicAPIService from 'shared/api/services/CodicAPIService'

const formReducer = (state: any, event: { reset?: boolean; name?: any; value?: any }) => {
	if (event.reset) {
		return {
			firstName: '',
			lastName: '',
			dateOfBirth: '',
			email: '',
			mobile: '',
			startEmployeeDate: '',
			lastEmployeeDate: '',
			isEmploymentActive: false,
		}
	}
	return {
		...state,
		[event.name]: event.value
	}
}

export const AddNewEmployee = () => {
	const [formData, setFormData] = useReducer(formReducer,
		{
			firstName: '',
			lastName: '',
			dateOfBirth: '',
			email: '',
			mobile: '',
			startEmployeeDate: '',
			lastEmployeeDate: '',
			isEmploymentActive: false,
		})
	const [submitting, setSubmitting] = useState<boolean>(false)
	const [errorMessage, setErrorMessage] = useState<string>('')
	const [confirmMessage, setConfirmMessage] = useState<string>('')
	const messageTime = 5000
	const buttonText = 'Spara'

	useEffect(() => {
		return () => clearTimeout()
	})

	const addNewEmployeeToDB = async (event: { preventDefault: () => void }) => {
		event.preventDefault()
		setSubmitting(true)
		const newEmployee = {
			firstName: formData.firstName,
			lastName: formData.lastName,
			dateOfBirth: new Date(formData.dateOfBirth),
			email: formData.email,
			mobile: formData.mobile,
			employeeInformation: {
				startEmployeeDate: new Date(formData.startEmployeeDate),
				lastEmployeeDate: new Date(formData.lastEmployeeDate),
				isEmploymentActive: formData.isEmploymentActive,
			}
		}
		try {
			const response = await CodicAPIService.createEmployee(newEmployee)
			setSubmitting(false)
			setConfirmMessage('Den anställde är inlagd i databasen')
			setTimeout(() => {
				setConfirmMessage('')
			}, messageTime)
			setFormData({
				reset: true
			})
		} catch (error) {
			setSubmitting(false)
			if (error instanceof Error) {
				setErrorMessage('Det gick inte att lägga till den anställda i databasen - ' + error.message)
			}
			setTimeout(() => {
				setErrorMessage('')
			}, messageTime)
		}
	}


	return (
		<Wrapper>
			<h1>Lägg till ny anställd</h1>
			<EmployeeForm formData={formData} setFormData={setFormData} buttonText={buttonText}
				submitting={submitting} onSubmit={addNewEmployeeToDB} />
			<br />
			{submitting && <Span>Laddar upp användare... </Span>}
			{submitting && <ErrorSpan>{errorMessage}</ErrorSpan>}
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

const ErrorSpan = styled.span`
	display:block;
	color: red;
	margin-left: 50px;
`

const Span = styled.span`
	display: block;
	margin-left: 50px;
`