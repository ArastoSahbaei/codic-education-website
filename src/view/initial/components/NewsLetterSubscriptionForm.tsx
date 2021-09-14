import { Button } from 'components/html/Button'
import { Form, Formik } from 'formik'

export const NewsLetterSubscriptionForm = () => {
	return (
		<div>
			<h1>Vi revolutionerar friluftsbranschen
				- joina oss och få 10% rabatt på ditt nästa köp!</h1>
			<p>Som prenumerant på vårt nyhetsbrev är du först med att få reda på nya produkter, grymma limited editions och specialerbjudanden.</p>
			<Formik
				initialValues={{}}
				onSubmit={(values) => console.log(values)}>
				<Form>
					<input />
					<Button text='Prenumerera' />
				</Form>
			</Formik>
			<p>Du kan vara lugn, vi hatar spam lika mycket som du gör och säljer aldrig din info till tredje part. Läs mer om vår integritetspolicy här.</p>
		</div>
	)
}
