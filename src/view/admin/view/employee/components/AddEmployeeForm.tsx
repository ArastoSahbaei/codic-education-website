import { useState, useReducer } from 'react'
import { Button } from 'components/html/Button'

const formReducer = (state: any, event: { name: any; value: any }) => {
	return {
		...state,
		[event.name]: event.value
	}
}

export const AddEmployeeForm = () => {
	const [formData, setFormData] = useReducer(formReducer, {})
	const [submitting, setSubmitting] = useState<boolean>(false)

	/* Information to send to backend should have this format
	employeeAdminData = {
		firstName:  - a string,
		lastName: - a string,
		dateOfBirth: - a date,
		email: - a string,
		mobile: - a string,
		employeeInformation: {
			startEmployeeDate: - a date,
			lastEmployeeDate: - a date,
			isEmploymentActive: - a boolean
		}
	}*/

	const handleSubmit = (event: { preventDefault: () => void }) => {
		event.preventDefault()
		alert('Submitting data')
		console.log(formData)
	}

	const handleChange = (event: { target: { type: string; name: any; checked: any; value: any } }) => {
		const isCheckbox = event.target.type === 'checkbox'
		setFormData({
			name: event.target.name,
			value: isCheckbox ? event.target.checked : event.target.value,
		})
	}

	return (
		<>
			<form onSubmit={handleSubmit}>
				<h1>Lägg till ny anställd</h1>

				<fieldset>
					<legend><h3>Information om den anställde: </h3></legend>

					<label>
						<p>Förnamn: </p>
						<input
							name='firstName'
							onChange={handleChange}
							value={formData.firstName || ''}
							pattern='[A-Za-zÅÄÖåäö-]{1,}'
							title='Bokstäver, minst en'
							required
						/> <br />
					</label>
					<label>
						<p>Eftername: </p>
						<input
							name='lastName'
							onChange={handleChange}
							value={formData.lastName || ''}
							pattern='[A-Za-zÅÄÖåäö-]{1,}'
							title='Bokstäver, minst en'
							required
						/> <br />
					</label>
					<label>
						<p>Födelsedatum: </p>
						<input
							name='dateOfBirth'
							type='date'
							onChange={handleChange}
							value={formData.dateOfBirth || ''}
						/> <br />
					</label>
					<label>
						<p>E-post: </p>
						<input
							name='email'
							type='email'
							onChange={handleChange}
							value={formData.email || ''}
						/> <br />
					</label>
					<label>
						<p>Mobilnummer: </p>
						<input
							name='mobile'
							onChange={handleChange}
							value={formData.mobile || ''}
							pattern='[0-9-+]{6,}'
							title='Mobilnummer - siffror utan mellanslag'
						/> <br />
					</label>
				</fieldset>
				<fieldset>
					<legend><h3>Information om anställningen: </h3></legend>
					<label>
						<p>Startdatum för anställning: </p>
						<input
							name='startEmployeeDate'
							type='date'
							onChange={handleChange}
							value={formData.startEmployeeDate || ''}
						/> <br />
					</label>
					<label>
						<p>Slutdatum för anställning: </p>
						<input
							name='lastEmployeeDate'
							type='date'
							onChange={handleChange}
							value={formData.lastEmployeeDate || ''}
						/> <br />
					</label>
					<label>
						<p>Pågående anställning: </p>
						<input
							name='isEmploymentActive'
							type='checkbox'
							onChange={handleChange}
							value={formData.isEmploymentActive || false}
						/> <br />
					</label>
				</fieldset>
				<br />
				<Button text='Spara' />
			</form>

		</>
	)
}

