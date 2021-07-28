import { SubscriptionHandler } from './components/SubscriptionHandler'
import { SubProfileViewWrapper } from 'shared/styles/Styles'

export const NewsLetterSubscriptionView = () => {
	return (
		<SubProfileViewWrapper>
			<h1>NYHETSBREV</h1>
			<SubscriptionHandler />
			<p>JUSTERA INSTÄLLNINGARNA FÖR NYHETSBREVET FÖR ATT FÅ INFORMATION VARJE VECKA OM NYHETER OCH TENDENSER FÖR DE KATEGORIER SOM DU HAR VALT.</p>
			<p>JAG HAR HAFT MÖJLIGHET ATT LÄSA OCH JAG FÖRSTÅR SEKRETESS- OCH COOKIEPOLICYN OCH JAG SAMTYCKER TILL ATT TA EMOT PERSONANPASSAD KOMMERSIELL KOMMUNIKATION FRÅN ZARA VIA E-POST.</p>
		</SubProfileViewWrapper>
	)
}
