import styled from 'styled-components'

export const CookieInformationView = () => {

	return (
		<CookieInfoWrapper>
			<h1>Cookies</h1>

			<h2>Vad är cookies?</h2>
			<Div>
				En cookie är en liten textfil som lagras på din telefon, surfplatta eller dator
				när du besöker en webbplats. Det finns olika typer av cookies - beständiga (&quot;vanliga&quot;)
				cookies och session-cookies.
				<br />
				<br />
				Skillnaden är att session-cookies försvinner när du stänger din webbläsare och sparas inte,
				medan &quot;vanliga&quot; cookies sparas på din dator/apparat under en längre tid, eller
				tills de raderas manuellt.
			</Div>

			<h2>Varför används cookies?</h2>
			<Div>
				Cookies hjälper webbplatsen att komma ihåg dina inställningar så att du inte behöver göra
				om inställningarna medan du är inne på webbplatsens olika sidor - allt för att ge dig den
				bästa möjliga upplevelse när du besöker oss.
				<br />
				<br />
				Cookies kan även användas till att samla anonym besöksstatistik om vilken information som söks
				och på så sätt hjälpa oss att utveckla och förbättra webbplatsen.
			</Div>

			<h2>Hur använder vi cookies?</h2>
			<Div>
				Här kommer det senare att läggas in en förklaring om vilka cookies vi använder
			</Div>
		</CookieInfoWrapper>
	)
}

const CookieInfoWrapper = styled.div`
	posistion: absolute;
	width: 78%;
	margin: 0 auto;
	padding: 1%:
`

const Div = styled.div`
	font-family: none;
	font-size: 1.2rem;
	padding-top:10px;
	padding-bottom: 20px;
`