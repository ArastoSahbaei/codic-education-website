import { primaryColor } from 'shared/styles/GlobalStyle'
import styled from 'styled-components'



export const ChoiceHeader = (props: { setChoice: (value: number) => void }) => {
	return (
		<Wrapper>
			<p>Välj åtgärd: </p>
			<ListItem onClick={() => props.setChoice(1)}>Lägg till ny anställd</ListItem>
			<ListItem onClick={() => props.setChoice(2)}>Lista över alla anställda</ListItem>
			<ListItem onClick={() => props.setChoice(3)}>Lista över alla anställda - möjlighet att redigera anställd</ListItem>
			<ListItem onClick={() => props.setChoice(4)}>Lista över alla anställda - möjlighet att radera anställd</ListItem>
			<Message>Obs! Använd bara radera om det begärts baserat på GDPR! Redigera annars den anställdes information.</Message>
		</Wrapper>
	)
}

const Wrapper = styled.div`
    padding: 10px;
`

const ListItem = styled.li`
    width: 400px;
    cursor: pointer;
    margin-left: 60px;
    padding: 2px 0px;

    :hover{
        background-color: ${primaryColor};
    }
`

const Message = styled.p`
    color: red;
    font-size: 1.1rem;
`