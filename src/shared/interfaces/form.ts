export type TInputValue = string | number | undefined


export type TInputFieldValidator = (value: TInputValue) => boolean

export interface IInputField {
    label: string
    inputType: 'text' | 'number' | 'date' | 'select'
    value?: TInputValue
    defaultValue?: TInputValue
    name: string
    onChange?: (name: string, value: TInputValue) => void
    options?: TInputValue[]
    validator?: TInputFieldValidator
}

export interface IInputFieldError {
    message: string
    field: IInputField
    valid: boolean
}

export interface IForm {
    [name: string]: IInputField;
}
