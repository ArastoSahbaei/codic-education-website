import {
	FC,
	useState,
	useCallback,
	ChangeEvent,
	useEffect,
	useMemo,
} from 'react'
import styled from 'styled-components'
import { ILabeledInput, TInputValue } from './types'
import { secondaryColorDark } from 'shared/styles/GlobalStyle'

export const LabeledInput: FC<ILabeledInput> = (props: ILabeledInput) => {
	const { value, name, label, inputType, onChange, options } = props
	const [localValue, setLocalValue] = useState<TInputValue>(value)

	const localOnChange = useCallback(
		(event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
			setLocalValue(event.target.value)
		},
		[setLocalValue]
	)

	useEffect(
		() => onChange && onChange(name, localValue),
		[onChange, localValue, name]
	)

	const renderedOptions = useMemo(
		() =>
			options ? (
				options.map((option: TInputValue) => (
					<option key={option}>{option}</option>
				))
			) : (
				<></>
			),
		[options]
	)

	return (
		<Wrapper>
			<Label htmlFor={name}>{label}</Label>
			{inputType !== 'select' ? (
				<Input
					name={name}
					id={name}
					type={inputType}
					value={localValue || ''}
					onChange={localOnChange}
				/>
			) : (
				<Select
					name={name}
					id={name}
					value={localValue || ''}
					onChange={
            localOnChange as (event: ChangeEvent<HTMLSelectElement>) => void
					}
				>
					{renderedOptions}
				</Select>
			)}
		</Wrapper>
	)
}

const Label = styled.label`
    display: block;
    width: 100%;
`

const Input = styled.input`
    font-size: 100%;
    display: block;
    width: 100%;
    border: none;
    outline: none;
    background: none;
    height: 3rem;
    border-bottom-style: solid;
    border-bottom-width: 2px;
    border-bottom-color: ${secondaryColorDark};
`

const Select = styled.select`
    font-size: 100%;
    display: block;
    width: auto;
    border: none;
    outline: none;
    background: none;
    height: 3rem;
    border-style: solid;
    border-width: 2px;
    border-color: ${secondaryColorDark};
    cursor: pointer;

    label+& {
      margin-top: 1rem;
    }
`

const Wrapper = styled.div`
display: block;
width: 100%;

  & + & {
    margin-top: 1rem;
  }
`
