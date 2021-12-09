import { Formik, Form } from 'formik'
import { useContext } from 'react'
import { UserContext } from 'shared/providers/UserProvider'
import { Button } from 'components/html/Button'
import { AdminSelect } from '../../employee/components/help_html/AdminSelect'
import { FormReturnButton } from '../../employee/components/help_html/FormReturnButton'
import styled from 'styled-components'
import CodicAPIService from 'shared/api/services/CodicAPIService'

export const RoleForm = (props: { setChoice: (arg0: number) => void, chosenRowData: { _id?: any; username: string; email: string; role: string; personalDetails: { firstName: string; lastName: string; phone: string }; } }) => {
	const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)
	const adminId = authenticatedUser._id


	const initialValues = {
		role: props.chosenRowData.role,
	}

	const updateRoleInDB = async (values: any) => {
		console.log('UserID ', props.chosenRowData._id)
		const userId = props.chosenRowData._id
		const reqBody = {
			'role': values.role,
			'id': adminId
		}

		try {
			await CodicAPIService.updateUserRole(userId, reqBody)
			props.setChoice(0)

		} catch (error) {
			console.log(error)
		}
	}

	return (
		<Wrapper>
			<FormReturnButton setChoice={props.setChoice} />
			<h2>Ändra användares behörighet</h2>
			<Formik
				initialValues={initialValues}
				/*validationSchema={}*/
				onSubmit={updateRoleInDB}
			>
				<Form>
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

const Div = styled.div`
	padding: 5px 10px 10px 10px;
`

const EmployeeInfoWrapper = styled.div`
	display: inline-block;
	width: 95%;
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