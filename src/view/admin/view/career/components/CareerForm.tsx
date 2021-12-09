import { Formik, Form } from 'formik'
import { useContext } from 'react'
import { UserContext } from 'shared/providers/UserProvider'
import { Button } from 'components/html/Button'
import { AdminInput } from '../../employee/components/help_html/AdminInput'
import styled from 'styled-components'
import CodicAPIService from 'shared/api/services/CodicAPIService'
import Validations from 'shared/validations/Validations'
import { FormReturnButton } from '../../employee/components/help_html/FormReturnButton'

export const CareerForm = (props: { setChoice: (arg0: number) => void; chosenRowData: any; method: 'create' | 'update' }) => {
	// AdminId is needed for check in backend
	const [authenticatedUser] = useContext(UserContext)
	const adminId = authenticatedUser._id

	const initialValues = {
		_id: props.chosenRowData._id,
		title: props.chosenRowData.title,
		jobType: props.chosenRowData.jobType,
		location: props.chosenRowData.location,
		description: props.chosenRowData.description,
		lastDate: props.chosenRowData.lastDate ? props.chosenRowData.lastDate.substr(0, 10) : props.chosenRowData.lastDate,        // Reduces lastDate to YYYY-MM-DD format - is string here
	}

	const isCreate = () => {
		return props.method === 'create'
	}

	const handleSubmit = async (values: any) => {

		const careerInformationForDB = {
			'title': values.title,
			'jobType': values.jobType,
			'location': values.location,
			'description': values.description,
			'lastDate': new Date(values.lastDate),                  // Parse to Date format before sending to database
			'id': adminId
		}

		isCreate() ? addCareerInDB(careerInformationForDB) : updateCareerInDB(careerInformationForDB)
	}

	const addCareerInDB = async (careerInformation: any) => {
		try {
			await CodicAPIService.createJob(careerInformation)
			props.setChoice(0)
		} catch (error) {
			console.log(error)
		}
	}

	const updateCareerInDB = async (careerInformation: any) => {
		const jobId = props.chosenRowData._id

		try {
			await CodicAPIService.updateJob(jobId, careerInformation)
			props.setChoice(0)
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<Wrapper>
			<FormReturnButton setChoice={props.setChoice} />
			{isCreate() ? <h2>Lägg till ny jobbannons</h2> : <h2>Uppdatera jobbannons</h2>}
			<Formik
				initialValues={initialValues}
				validationSchema = {Validations.adminCareerFormValidation}
				onSubmit={handleSubmit}
			>
				<Form autoComplete='off'>
					<CareerWrapper>
						<h3>Information om tjänsten</h3>
						<AdminInput name='title' label='Rubrik på annonsen' type='text' />
						<AdminInput name='jobType' label='Typ av tjänst' type='text' />
						<AdminInput name='location' label='Plats' type='text' />
						<AdminInput as='textarea' rows='4' name='description' label='Beskrivning' />
						<AdminInput name='lastDate' label='Sista ansökningsdatum' type='date' />
					</CareerWrapper>
					<br />
					<Button text={isCreate() ? 'Spara' : 'Uppdatera'} />
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

const CareerWrapper = styled.div`
display: block;
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
input[type=text] {
	margin: 5px 0px 10px 0px;
	width: 100%;
}
input[type=date]{
	margin: 5px 0px 10px 20px;
	width: 20%;
}
textarea{
	margin: 5px 0px 10px 0px;
	width: 100%;
}
`