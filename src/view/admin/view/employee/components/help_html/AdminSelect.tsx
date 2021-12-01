import { Field, ErrorMessage } from 'formik'
import styled from 'styled-components'

export const AdminSelect = (props: any) => {
	const { label, name } = props

	return (
		<FieldWrapper>
			<label htmlFor={name}>{label}</label>
			<Field as="select" id={name} name={name}>
				<option value="basic">Basic</option>
				<option value="employee">Anställd</option>
				<option value="admin">Administratör</option>
			</Field>
			<ErrorMessage name={name} />
		</FieldWrapper>
	)
}

const FieldWrapper = styled.div`
    padding: 5px 10px;
    select {
        margin-left: 10px;
    }

`