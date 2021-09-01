import { SubscriptionHandler } from './components/SubscriptionHandler'
import { SubProfileViewWrapper } from 'shared/styles/Styles'

export const NewsLetterSubscriptionView = () => {
	return (
		<SubProfileViewWrapper>
			<h1>NYHETSBREV</h1>
			<SubscriptionHandler />
		</SubProfileViewWrapper>
	)
}
