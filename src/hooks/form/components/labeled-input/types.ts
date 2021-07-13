export type TInputValue = string | number | undefined


export interface ILabeledInput {
    label: string
    inputType: 'text' | 'number' | 'date' | 'select'
    value?: TInputValue
    name: string
    options?: TInputValue[]
    onChange?: (name: string, value: TInputValue) => void
}
