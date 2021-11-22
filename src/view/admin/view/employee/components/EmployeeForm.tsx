import { Formik, Form } from 'formik'
import { Button } from 'components/html/Button'
import { AdminInput } from './help_html/AdminInput'
import styled from 'styled-components'
import Validations from 'shared/validations/Validations'
import CodicAPIService from 'shared/api/services/CodicAPIService'

export const EmployeeForm = (props: { setChoice: (arg0: number) => void , chosenRowData: { _id?:any; username: any; email: any; personalDetails: { firstName: any; lastName: any; phone: any }; employeeInformation: { startEmployeeDate: any; lastEmployeeDate: any; isEmploymentActive: any } } }) => {
	
	const initialValues = {
		username: props.chosenRowData.username,
		email:  props.chosenRowData.email,
		personalDetails: {
			firstName:  props.chosenRowData.personalDetails.firstName,
			lastName:  props.chosenRowData.personalDetails.lastName,
			phone:  props.chosenRowData.personalDetails.phone,
		},
		employeeInformation: {
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
				'startEmployeeDate': new Date(values.employeeInformation.startEmployeeDate),
				'lastEmployeeDate': new Date(values.employeeInformation.lastEmployeeDate),
				'isEmploymentActive': values.employeeInformation.isEmploymentActive
			}
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
				<Form>
					<EmployeeInfoWrapper>
						<h3>Information om den anställde: </h3>
						<AdminInput name='username' label='Användarnamn' readOnly />
						<AdminInput name='personalDetails.firstName' label='Förnamn' readOnly/>
						<AdminInput name='personalDetails.lastName' label='Efternamn' readOnly/>
						<AdminInput name='email' label='E-post' type='email' readOnly/>
						<AdminInput name='personalDetails.phone' label='Mobil' readOnly/>
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