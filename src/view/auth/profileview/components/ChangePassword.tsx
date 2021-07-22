import { Input } from 'components/html/Input'
import { Formik } from 'formik'

export const ChangePassword = () => {

	const handleSubmit = async (values: any) => {
		console.log(values)
	}

	return (
		<Formik
			initialValues={{}}
			onSubmit={(values) => handleSubmit(values)}>
			<Input />
		</Formik>
	)
}
