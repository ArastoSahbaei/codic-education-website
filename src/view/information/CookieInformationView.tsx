import { primaryColor } from 'shared/styles/GlobalStyle'
import styled from 'styled-components'

export const CookieInformationView = () => {

	return (
		<CookieInfoWrapper>
			<h1>Cookies</h1>

			<Div>
				För att ge dig som besökare en så bra upplevelse av våra webbplatser som möjligt använder vi cookies. 
				Cookies används för att vi ska kunna se de val du tidigare gjort på våra webbplatser och för att ge oss möjlighet 
				att förbättra våra webbplatser. Cookies används även för att mäta trafiken på våra webbplatser och för statistik.
				<br />
				<br />
				På vissa av våra webbplatser placerar även våra innehållsleverantörer, som till exempel olika sociala medier, 
				cookies på din dator.
				<br />
				<br />
				Det är möjligt för dig att göra inställningar på din dator som hindrar oss och våra innehållsleverantörer från 
				att placera cookies på din dator. Sådana inställningar kan innebära att vissa funktioner på våra webbplatser 
				inte kommer att fungera. Information om hur du kan förhindra lagring av cookies på din dator finns nedan.
			</Div>
			
			<h2>Vad är cookies?</h2>
			<Div>
				En cookie är en liten mängd data som oftast har en unik stämpel på sig. 
				Denna data skickas från en webbplats dator till din webbläsare och sparas där, på din hårddisk, så att 
				webbplatsen kan känna igen din dator.
				<br />
				<br />
				Alla webbplatser kan skicka cookies till din webbläsare om dina inställningar i webbläsaren tillåter det. 
				För att denna information inte ska missbrukas kan webbplatser bara läsa information från cookies sparade av dem 
				själva och inte några cookies sparade av andra webbplatser.
				<br />
				<br />
				Det finns två typer av cookies, permanenta och temporära (s.k. sessionscookies). Permanenta cookies lagras som en 
				fil på din dator under en längre period. Sessionscookies är temporärt placerade på din dator när du besöker en 
				webbplats, men försvinner när du stänger ner sidan vilket innebär att de inte sparas permanent på din dator. 
				De flesta företag använder cookies på sina webbplatser för att förbättra användbarheten och cookies kan inte skada 
				dina filer eller öka risken för virus på din dator.
				<br />
				<br />
				Som användare har du möjlighet att ställa in om du vill att cookies ska få sparas automatiskt i din webbläsare, 
				om du vill tillfrågas varje gång en cookie vill sparas eller om du vill att inga cookies ska sparas. 
				Cookies används på många webbplatser för att hålla reda på om webbläsaren har besökt webbplatsen tidigare och 
				vilka val som då gjorts. Det görs en kontroll vid varje besök på webbplatsen om cookies finns lagrade i webbläsaren 
				eller inte. Finns det inga lagrade cookies från webbplatsen sparar webbläsaren de cookies som finns på webbplatsen.
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

			<h2>Hur använder vi cookies och liknande tekniker?</h2>
			<Div>
				Cookies och liknande tekniker används för flera olika ändamål. Här har vi beskrivit olika kategorier av cookies 
				och tekniker som vi använder på våra sajter och appar. . Vi använder både förstapartscookies och tredjepartscookies.
				<br />
				<br />
				<table>
					<thead> 
						<tr>
							<th>Kategori</th>
							<th>Beskrivning</th>
						</tr>
					</thead> 
					<tbody>
						<tr style={{backgroundColor:'lightgrey'}}>
							<td>Nödvändiga cookies/tekniker</td>
							<td>
								Dessa cookies och tekniker gör att webbsidan fungerar säkert och korrekt, och webbsidan kan således inte 
								fungera ordentligt utan dessa. Exempel på nödvändiga cookies/tekniker är sådana som används för att 
								utföra åtgärder som du har begärt, exempelvis inställning av dina personliga preferenser, inloggning 
								eller när du ska fylla i ett formulär.
							</td>
						</tr>
						<tr>
							<td>Funktionella cookies/tekniker</td>
							<td>
								Dessa cookies och tekniker gör att det går att tillhandahålla utökade funktioner och personlig 
								anpassning på webbplatsen.
							</td>
						</tr>
						<tr style={{backgroundColor:'lightgrey'}}>
							<td>Analys & utveckling</td>
							<td>
							Dessa cookies och tekniker används för att ta fram statistik över besök på webbsidan för att optimera dess 
							navigering och innehåll. Genom olika mätverktyg kan vi samla in statistik över hur våra webbsidor och appar används.
							Detta hjälper oss att utveckla och förbättra upplevelsen för dig som användare. Vi använder bl.a. realtidsverktyg 
							för att kunna avgöra vilka nyheter som ska publiceras vid vilken tidpunkt. Andra verktyg, t.ex. Google Analytics, 
							används för att följa och analysera läsandet över tid. Vissa webbsidor använder verktyget Hotjar för att se hur 
							användare klickar och scrollar på webbsidan samt för att genomföra undersökningar där vi ställer frågor till 
							våra besökare.
							</td>
						</tr>
						<tr>
							<td>Anpassa marknadsföring och innehåll</td>
							<td>
								Dessa cookies och tekniker används för att kunna ge dig en personligt anpassad upplevelse på webbsidan/appen, 
								samt för att kunna ge dig personligt anpassade erbjudanden. Med hjälp av dessa mättekniker kan vi anpassa 
								innehåll och erbjudanden baserat på vad du har läst eller tittat på tidigare på vår webbsida/app.
							</td>
						</tr>
						<tr style={{backgroundColor:'lightgrey'}}>
							<td>Marknadsföring på andra plattformar</td>
							<td>
								Några av våra sajter använder dessa cookies och tekniker används för att kunna marknadsföra sina produkter 
								och tjänster på andra plattformar, såsom Facebook och Google. Med hjälp av dessa verktyg kan vi visa dig 
								mer relevant marknadsföring på Facebook, Google och andra plattformar, baserat på ditt beteende på 
								vår webbsida.
							</td>
						</tr>
						<tr>
							<td>Externt innehåll/teknik</td>
							<td>
								Dessa cookies och tekniker används för att visa innehåll från andra medier, och för att möjliggöra 
								vissa funktioner som tillhandahålls av externa samarbetspartners. 
								Exempel på detta kan vara t.ex. innehåll från sociala medier, ljud- eller videospelare.
							</td>
						</tr>
						<tr style={{backgroundColor:'lightgrey'}}>
							<td>Annonscookies</td>
							<td>
								Annonsörer, annonsbyråer och andra samarbetspartners använder cookies för att kunna leverera annonser 
								på våra webbsidor, för att mäta hur många användare som har sett en annons eller för att anpassa vilka 
								annonser du exponeras för.
							</td>
						</tr>
					</tbody>
				</table>					
			</Div>

			<h2>Så kan du hantera cookies och lokal lagring av data</h2>
			<Div>
				Du kan själv göra inställningar i din webbläsare för om och hur lokal information får lagras. 
				Du kan även själv radera cookies från din webbläsare och din enhet.
				<br />
				<br />
				På din mobila enhet kan du själv göra vissa inställningar, bl a för att begränsa användningen av information 
				om din användning av appar i syfte att tillhandahålla annonser baserade på dina intressen.
			</Div>

			<h2>Hur hanterar du cookies i din webbläsare?</h2>
			<Div>
				Alla webbläsare är olika. Leta i hjälpfunktionen i din webbläsare för information om hur du ändrar 
				cookie-inställningarna. Du kan själv radera alla cookies från din hårddisk. Detta gör du i din 
				webbläsares inställningar.
				<br />
				<br />	
				Här kan du hitta information om hur du hanterar cookies i flera vanliga webbläsare:<br />
				(<i>länkarna kommer att öppnas i egen tab/fönster.</i>)
				<br />
				<br />
				<List>
					<li>
						<strong>Chrome</strong> (länk: <a style={{display: 'inline'}} href = 'https://support.google.com/chrome/answer/95647?hl=sv' target = '_blank' rel = 'noopener noreferrer'> https://support.google.com/...</a>)
					</li>
					<li>
						<strong>Safari</strong> (länk: <a style={{display: 'inline'}} href = 'https://support.apple.com/sv-se/guide/safari/sfri11471/14.0/mac/11.0' target = '_blank' rel = 'noopener noreferrer'> https://support.apple.com/...</a>)
					</li>
					<li>
						<strong>Safari på iPhone och iPad</strong> (länk: <a style={{display: 'inline'}} href = 'https://support.apple.com/sv-se/HT201265' target = '_blank' rel = 'noopener noreferrer'> https://support.apple.com/...</a>)
					</li>
					<li>
						<strong>Internet Explorer</strong> (länk: <a style={{display: 'inline'}} href = 'https://support.microsoft.com/sv-se/windows/ta-bort-och-hantera-cookies-168dab11-0753-043d-7c16-ede5947fc64d' target = '_blank' rel = 'noopener noreferrer'> https://support.microsoft.com/...</a>)
					</li>
					<li>
						<strong>Microsoft Edge</strong> (länk: <a style={{display: 'inline'}} href = 'https://support.microsoft.com/sv-se/microsoft-edge/ta-bort-cookies-i-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09' target = '_blank' rel = 'noopener noreferrer'> https://support.microsoft.com/...</a>)
					</li>
					<li>
						<strong>Firefox</strong> (länk: <a style={{display: 'inline'}} href = 'https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer' target = '_blank' rel = 'noopener noreferrer'> https://support.mozilla.org/...</a>)
					</li>
					<li>
						<strong>Opera</strong> (länk: <a style={{display: 'inline'}} href = 'https://www.opera.com/help/tutorials/security/privacy/' target = '_blank' rel = 'noopener noreferrer'> https://www.opera.com/...</a>)
					</li>
				</List>	
			</Div>

			<h2>Vad händer om jag avaktiverar cookies?</h2>
			<Div>
				Om du väljer att inaktivera cookies kan det innebära att viss funktionalitet på våra webbsidor slutar att fungera, 
				samt att inställningar och inloggningar inte sparas.
				<br />
				<br />
				Om du avaktiverar en cookie eller en kategori av cookies tar du inte bort cookien från din webbläsare, detta måste 
				du själv göra från din webbläsare.
				<br />
				<br />
				Notera att om du avaktiverar annonscookies så betyder det inte att du inte längre kommer att få se reklam på 
				våra webbsidor, utan att den reklam som visas inte kommer att vara anpassad för dig och därför kan upplevas 
				som mindre relevant.
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

const List = styled.ul`
	padding-left: 25px;
	li a{
		text-decoration: none;
		color: ${primaryColor};
	}
`