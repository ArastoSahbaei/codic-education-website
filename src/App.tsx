import { Routes } from './routes/Routes'
import { Navigation } from './components/navigation/Navigation'
import { GlobalStyle } from './shared/styles/GlobalStyle'
import { UserProvider } from './shared/providers/UserProvider'
import { ScrollProvider } from './shared/providers/ScrollProvider'
import { Space } from './components/space'
import { useNavHeight } from './hooks/useNavHeight'
import { ToastifyConfigurations } from './shared/configurations/ToastifyConfigurations'

export const App = () => {
	const { navHeight } = useNavHeight()

	return (
		<UserProvider>
			<ScrollProvider>
				<Routes>
					<GlobalStyle />
					<Navigation />
					<Space space={navHeight} />
					<ToastifyConfigurations />
				</Routes>
			</ScrollProvider>
		</UserProvider>
	)
}

