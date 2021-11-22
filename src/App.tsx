import { Space } from './components/space/space'
import { Routes } from './routes/Routes'
import { Navigation } from './components/navigation/Navigation'
import { CookieForm } from 'components/CookieForm'
import { GlobalStyle } from './shared/styles/GlobalStyle'
import { ScrollToTop } from 'components/ScrollToTop'
import { UserProvider } from './shared/providers/UserProvider'
import { useNavHeight } from './hooks/useNavHeight'
import { ScrollBarStyle } from 'shared/styles/ScrollbarStyle'
import { ToastifyConfigurations } from './shared/configurations/ToastifyConfigurations'

export const App = () => {
	const { navHeight } = useNavHeight()

	return (
		<>
			<>
				<GlobalStyle />
				<ScrollBarStyle />
				<ToastifyConfigurations />
				<CookieForm />
			</>
			<UserProvider>
				<Routes>
					<ScrollToTop />
					<Navigation />
					<Space space={navHeight} />
				</Routes>
			</UserProvider>
		</>
	)
}

