import { IForm, IInputFieldError, TInputValue, IInputField } from 'shared/interfaces/form'

export const stringIsNotEmpty = (value:string):boolean => !!value.trim()

export function fieldNotEmpty(value: TInputValue):boolean { return !!value && (typeof value === 'string' ? stringIsNotEmpty(value) : true) }


export const getErrorsFromForm = (form: IForm): IInputFieldError[] => Object.keys(form).map(name => form[name]).map((field:IInputField) =>
	({
		message: field.validator ? field.validator.prototype.constructor.name : '',
		valid: (field.validator || (() => true))(field.value),
		field
	})).filter(error => !error.valid)
