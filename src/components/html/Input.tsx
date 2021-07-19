import { useField } from 'formik'
import { secondaryColor } from '../../shared/styles/GlobalStyle'
import styled from 'styled-components'

export const Input = ({ ...props }: any) => {
	const [field, meta] = useField(props)
	return (
		<>
			<label htmlFor={props.name} />
			<InputField id={props.name} type={props.type}{...field} {...props} autoComplete='on' />
			{meta.touched && meta.error ? (
				<StyledErrorMessage>{meta.error}</StyledErrorMessage>
			) : null}
		</>
	)
}

const InputField = styled.input`
  margin-bottom: 1.5em;
  padding: 0.15em;
  font-size: 1.0em;
  border: 4px solid ${secondaryColor};
  border-radius: 0.5em;
  width: 100%
`

const StyledErrorMessage = styled.div`
  font-size: 0.8em;
  color: red;
  margin-top: -1.75em;
  margin-bottom: 0.5em;
`
