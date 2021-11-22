import { Formik, Form } from 'formik'
import { Button } from 'components/html/Button'
import { AdminInput } from '../../employee/components/help_html/AdminInput'
import { AdminSelect } from '../../employee/components/help_html/AdminSelect'
import styled from 'styled-components'
import Validations from 'shared/validations/Validations'
import CodicAPIService from 'shared/api/services/CodicAPIService'

export const RoleForm = (props: { setChoice: (arg0: number) => void, chosenRowData: { _id?: any; username: string; email: string; role: string; personalDetails: { firstName: string; lastName: string; phone: string }; } }) => {

	const initialValues = {
		username: props.chosenRowData.username,
		email: props.chosenRowData.email,
		role: props.chosenRowData.role,
		personalDetails: {
			firstName: props.chosenRowData.personalDetails.firstName,
			lastName: props.chosenRowData.personalDetails.lastName,
			phone: props.chosenRowData.personalDetails.phone,
		},

	}

	const updateRoleInDB = async (values: any) => {
		console.log('UserID ', props.chosenRowData._id)
		const userId = props.chosenRowData._id

		try {
			await CodicAPIService.updateUserRole(userId, values.role)
			props.setChoice(0)

		} catch (error) {
			console.log(error)
		}
	}

	return (
		<Wrapper>
			<h2>Ändra användares behörighet</h2>
			<Formik
				initialValues={initialValues}
				validationSchema={Validations.adminRoleFormValidation}
				onSubmit={updateRoleInDB}
			>
				<Form>
					<EmployeeInfoWrapper>
						<h3>Information om den anställde: </h3>
						<AdminInput name='username' label='Användarnamn' readOnly />
						<AdminInput name='personalDetails.firstName' label='Förnamn' readOnly />
						<AdminInput name='personalDetails.lastName' label='Efternamn' readOnly />
						<AdminInput name='email' label='E-post' type='email' readOnly />
						<AdminInput name='personalDetails.phone' label='Mobil' readOnly />
						<h3>Ändra behörighet:</h3>
						<AdminSelect name='role' label='Behörighet' />
					</EmployeeInfoWrapper>

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