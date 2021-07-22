import { useField } from 'formik'
import TextField from '@material-ui/core/TextField'
import styled from 'styled-components'

export const Input = ({ ...props }: any) => {
	const [field, meta] = useField(props)
	return (
		<>
			<TextField {...field}
				id={props.name}
				label={props.label}
				type={props.type}
				required={props.required}
			/>
			<br />
			{meta.touched && meta.error
				? <StyledErrorMessage>{meta.error}</StyledErrorMessage>
				: null}
		</>
	)
}

const StyledErrorMessage = styled.div`
  color: #cc3300;
`
