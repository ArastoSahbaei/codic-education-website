import { Button } from 'components/html/Button'

export const FormReturnButton = (props: { setChoice: (arg0: number) => void }) => {

	return (
		<>
			<Button text='Åter till Listan' onClick={() => props.setChoice(0)} />
		</>
	)
}