import { secondaryColor, secondaryColorDark } from '../../shared/styles/GlobalStyle'
import { IButton } from './types'

const disabledButton = 'background-color: gray;'

const enabledButton = `
		background-color: ${ secondaryColorDark };
        cursor: pointer;

		&:hover {
    		background-color: ${ secondaryColor };
    		transition: background-color 0.2s;
		}
`

export function isDisabled(props: Partial<IButton>) {
	return props.disabled ? {disabledButton} : {enabledButton}
}
