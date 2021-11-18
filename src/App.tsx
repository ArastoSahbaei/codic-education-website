import { Space } from './components/space/space'
import { Routes } from './routes/Routes'
import { Navigation } from './components/navigation/Navigation'
import { GlobalStyle } from './shared/styles/GlobalStyle'
import { UserProvider } from './shared/providers/UserProvider'
import { useNavHeight } from './hooks/useNavHeight'
import { ToastifyConfigurations } from './shared/configurations/ToastifyConfigurations'
import { CookieForm } from 'components/CookieForm'
import { ScrollToTop } from 'components/ScrollToTop'
import { ScrollBarStyle } from 'shared/styles/ScrollbarStyle'

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

