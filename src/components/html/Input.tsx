import { useField } from 'formik'
import { withStyles } from '@material-ui/styles'
import { primaryColor } from 'shared/styles/GlobalStyle'
import TextField from '@material-ui/core/TextField'
import styled from 'styled-components'

const CssTextField = withStyles({
	root: {
		'& label.Mui-focused': {
			color: primaryColor,
		},
		'& .MuiInput-underline:after': {
			borderBottomColor: primaryColor,
		},
		'& .MuiOutlinedInput-root': {
			'&.Mui-focused fieldset': {
				borderColor: primaryColor,
			},
		},
	},
})(TextField)

export const Input = ({ ...props }: any) => {
	const [field, meta] = useField(props)
	return (
		<>
			<CssTextField {...field}
				id="custom-css-standard-input"
				label={props.label}
				type={props.type}
				required={props.required}
				disabled={props.disabled}
				style={props.style} />
			<br />
			{meta.touched && meta.error && <StyledErrorMessage>{meta.error}</StyledErrorMessage>}
		</>
	)
}

const StyledErrorMessage = styled.div`
  color: #cc3300;
`
