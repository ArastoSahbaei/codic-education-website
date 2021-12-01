import { Field, ErrorMessage } from 'formik'
import styled from 'styled-components'

export const AdminInput = (props: any) => {
	const { label, name, ...rest } = props

	return (
		<FieldWrapper>
			<label htmlFor={name}>{label}</label>
			<Field id={name} name={name} {...rest} />
			<ErrorMessage name={name} />
		</FieldWrapper>
	)
}


const FieldWrapper = styled.div`
    padding: 5px 10px;
    input {
        margin-left: 10px;
    }

`
