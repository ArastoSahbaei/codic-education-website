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

export const UpdateEmployee = (props: {employee: any, setChoice: (value: number) => void}) => {
	const { startEmployeeDate , lastEmployeeDate, isEmploymentActive } = props.employee.employeeInformation
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
	const buttonText = 'Uppdatera'

	useEffect(() => {
		return () => clearTimeout()
	})

	const updateEmployeeInDB = async (event: { preventDefault: () => void }) => {
		event.preventDefault()
		setSubmitting(true)
		const updatedEmployee = {
			firstName: formData.firstName,
			lastName: formData.lastName,
			dateOfBirth: formData.dateOfBirth ? new Date(formData.dateOfBirth) : '',
			email: formData.email,
			mobile: formData.mobile,
			employeeInformation: {
				startEmployeeDate: formData.startEmployeeDate ? new Date(formData.startEmployeeDate) : '',
				lastEmployeeDate: formData.lastEmployeeDate ? new Date(formData.lastEmployeeDate) : '',
				isEmploymentActive: formData.isEmploymentActive,
			}
		}
		try {
			await CodicAPIService.updateEmployee(props.employee._id, updatedEmployee)
			setSubmitting(false)
			setConfirmMessage('Uppgifterna är ändrade i databasen')
			setTimeout(() => {
				setConfirmMessage('')
				props.setChoice(3)
			}, 1000)
			
		
		} catch (error) {
			setSubmitting(false)
			if (error instanceof Error) {
				setErrorMessage('Det gick inte att uppdatera den anställdas information i databasen - ' + error.message)
			}
			setTimeout(() => {
				setErrorMessage('')
			}, messageTime)
		}
	}


	return (
		<Wrapper>
			<h1>Redigera information rörande anställd</h1>
			<EmployeeForm formData={formData} setFormData={setFormData} buttonText={buttonText}
				submitting={submitting} onSubmit={updateEmployeeInDB} readonly={false} />
			<br />
			{submitting && <Span>Kontakt med databasen pågår... </Span>}
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

const ErrorSpan = styled.span`
	display:block;
	color: red;
	margin-left: 50px;
`

const Span = styled.span`
	display: block;
	margin-left: 50px;
`