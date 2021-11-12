import { Space } from './components/space/space'
import { Routes } from './routes/Routes'
import { Navigation } from './components/navigation/Navigation'
import { GlobalStyle } from './shared/styles/GlobalStyle'
import { UserProvider } from './shared/providers/UserProvider'
import { useNavHeight } from './hooks/useNavHeight'
import { ToastifyConfigurations } from './shared/configurations/ToastifyConfigurations'
import { CookieForm } from 'components/CookieForm'
import { ScrollBarStyle } from 'shared/styles/ScrollbarStyle'

export const App = () => {
	const { navHeight } = useNavHeight()

	return (
		<>
			<GlobalStyle />
			<ScrollBarStyle />
			<UserProvider>
				<Routes>
					<Space space={navHeight} />
					<Navigation />
					<ToastifyConfigurations />
					<CookieForm />
				</Routes>
			</UserProvider>
		</>
	)
}

