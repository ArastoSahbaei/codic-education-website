import { LabeledInput } from 'components/labeled-input'
import { IInputField, TInputValue } from 'shared/interfaces/form'

export const useFormRender = () => {
	const renderFields = (
		fields: IInputField[],
		onChange: (name: string, value: TInputValue) => void
	) => {
		return fields.map((field) => (
			<LabeledInput
				key={field.name}
				name={field.name}
				label={field.label}
				inputType={field.inputType}
				options={field.options}
				onChange={onChange}
			/>
		))
	}
	return { renderFields }
}
