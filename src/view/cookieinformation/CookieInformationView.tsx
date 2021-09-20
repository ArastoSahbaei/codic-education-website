import { CookieForm } from "components/CookieForm"


export const CookieInformationView = () => {

	return (
		<>
            <h1>Cookies</h1>

            <h2>Vad är cookies?</h2>
            <p>
                En cookie är en liten textfil som lagras på din telefon, surfplatta eller dator 
                när du besöker en webbplats. Det finns olika typer av cookies - beständiga (&quot;vanliga&quot;) 
                cookies och session-cookies.
            </p> 
            <p>
                Skillnaden är att session-cookies försvinner när du stänger din webbläsare och sparas inte, 
                medan &quot;vanliga&quot; cookies sparas på din dator/apparat under en längre tid, eller 
                tills de raderas manuellt. 
            </p>

            <h2>Varför används cookies?</h2>
            <p>
                Cookies hjälper webbplatsen att komma ihåg dina inställningar så att du inte behöver göra 
                om inställningarna medan du är inne på webbplatsens olika sidor - allt för att ge dig den 
                bästa möjliga upplevelse när du besöker oss.
            </p> 
            <p>
                Cookies kan även användas till att samla anonym besöksstatistik om vilken information som söks
                och på så sätt hjälpa oss att utveckla och förbättra webbplatsen. 
            </p>

            <h2>Hur använder vi cookies?</h2>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum alias, hic sunt nemo, 
                molestias praesentium soluta eos a sint inventore rem aperiam provident porro magnam 
                distinctio quam neque iste! Totam.
            </p>
            <CookieForm />
		</>
	)

}