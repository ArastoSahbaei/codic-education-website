import { useField } from 'formik'
import { secondaryColor } from '../../../shared/styles/GlobalStyle'
import styled from 'styled-components'

export const TextArea = ({ ...props }: any) => {
	const [field, meta] = useField(props)
	return (
		<>
			<label htmlFor={props.name} />
			<StyledTextArea id={props.name} {...field} {...props} rows={8} />
			{meta.touched && meta.error ? (
				<StyledErrorMessage>{meta.error}</StyledErrorMessage>
			) : null}
		</>
	)
}

const StyledTextArea = styled.textarea`
  font-family: AlegreyaSansRegular, sans-serif;
  margin-bottom: 1.5em;
  padding: 0.15em;
  font-size: 1.0em;
  border: 4px solid ${secondaryColor};
  border-radius: 0.5em;
  width: 100%;
  resize: vertical;
`

const StyledErrorMessage = styled.div`
  font-size: 0.8em;
  color: red;
  margin-top: -1.75em;
  margin-bottom: 0.5em;
`
