import { ShowContactPersons } from './components/ShowContactPersons'
import styled from 'styled-components'
import { ContactForm } from './components/ContactForm'

export const ContactView = () => {
	return (
		<>
			<ShowContactPersons />
			<ContactForm />
		</>
	)
}
