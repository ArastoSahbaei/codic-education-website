import { Formik, Form } from 'formik'
import { useContext } from 'react'
import { UserContext } from 'shared/providers/UserProvider'
import { Button } from 'components/html/Button'
import { AdminInput } from './help_html/AdminInput'
import styled from 'styled-components'
import CodicAPIService from 'shared/api/services/CodicAPIService'

export const EmployeeForm = (props: { setChoice: (arg0: number) => void , chosenRowData: { _id?:any; username: any; email: any; personalDetails: { firstName: any; lastName: any; phone: any }; employeeInformation: { workPhone: any; workEmail: any; startEmployeeDate: any; lastEmployeeDate: any; isEmploymentActive: any } } }) => {
	// AdminId is needed for check in backend
	const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)
	const adminId = authenticatedUser._id

	const initialValues = {
		employeeInformation: {
			workPhone: props.chosenRowData.employeeInformation ? props.chosenRowData.employeeInformation.workPhone : '',
			workEmail: props.chosenRowData.employeeInformation ? props.chosenRowData.employeeInformation.workEmail : '',
			startEmployeeDate:  props.chosenRowData.employeeInformation ? props.chosenRowData.employeeInformation.startEmployeeDate : '',
			lastEmployeeDate:  props.chosenRowData.employeeInformation ? props.chosenRowData.employeeInformation.lastEmployeeDate : '',
			isEmploymentActive: props.chosenRowData.employeeInformation ? props.chosenRowData.employeeInformation.isEmploymentActive : false,
		},
	}

	const updateEmployeeInformationInDB = async (values:any) => {
		console.log('UserID ', props.chosenRowData._id)
		const userId = props.chosenRowData._id

		const updatedEmployeeInformation = {
			'employeeInformation' : {
				'workPhone': values.employeeInformation.workPhone,
				'workEmail': values.employeeInformation.workEmail,
				'startEmployeeDate': new Date(values.employeeInformation.startEmployeeDate),
				'lastEmployeeDate': new Date(values.employeeInformation.lastEmployeeDate),
				'isEmploymentActive': values.employeeInformation.isEmploymentActive
			},
			'id': adminId
		}

		try {
			await CodicAPIService.updateEmployeeInformation(userId, updatedEmployeeInformation)
			props.setChoice(0)
				
		} catch (error) {
			console.log(error)
		}
	}

	return(
		<Wrapper>
			<h2>Lägg till / Ändra anställningsinformation</h2>
			<Formik
				initialValues = {initialValues}
				/*validationSchema = {}*/
				onSubmit = {updateEmployeeInformationInDB} 
			>
				<Form autoComplete='off'>
					<EmployeeInfoWrapper>
						<h3>Information om den anställde: </h3>
						<Div>
							Användarnamn: {props.chosenRowData.username}<br />
							Förnamn: {props.chosenRowData.personalDetails.firstName}<br />
							Efternamn: {props.chosenRowData.personalDetails.lastName}<br />
							Telefon, privat: {props.chosenRowData.personalDetails.phone}<br />
							E-post, privat: {props.chosenRowData.email}<br />
							<br />
							<hr />
						</Div>
						<AdminInput name='employeeInformation.workPhone' label='Telefon, arbete' />
						<AdminInput name='employeeInformation.workEmail' label='E-post, arbete' type='email'/>
					</EmployeeInfoWrapper>
					<EmploymentInfoWrapper>
						<h3>Information om anställningen: </h3>
						<AdminInput name='employeeInformation.startEmployeeDate' label='Startdatum för anställning' type='date'/>
						<AdminInput name='employeeInformation.lastEmployeeDate' label='Slutdatum för anställning' type='date' />
						<AdminInput name='employeeInformation.isEmploymentActive' label='Pågående anställning' type='checkbox'/>
					</EmploymentInfoWrapper>
					<br />
					<Button text={'Spara'} />
					<br />
				</Form>
			</Formik>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	padding: 5px 20px;
	h2{ 
		text-align: center;
		padding: 10px;
	}
	button{
		float:right;
		margin: 10px 5%;
	}
`

const Div = styled.div`
	padding: 5px 10px 10px 10px;
`

const EmployeeInfoWrapper = styled.div`
	display: inline-block;
	width: 45%;
	margin-left: 3%;
	margin-bottom: 5px;
	padding: 10px;
	border: 2px solid black;
	border-radius: 5px;
	h3 {
		display: inline-block;
		padding: 5px 10px;
	}
`

const EmploymentInfoWrapper = styled.div`
	display: inline-block;
	float: right;
	width: 45%;
	margin-right: 3%;
	padding: 10px;
	padding-bottom: 60px;
	border: 2px solid black;
	border-radius: 5px;
	h3 {
		display: inline-block;
		padding: 5px 10px;
	}
`