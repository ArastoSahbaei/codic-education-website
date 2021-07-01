import { Routes } from './routes/Routes'
import { Navigation } from './components/navigation/Navigation'
import { GlobalStyle } from './shared/styles/GlobalStyle'
import { UserProvider } from './shared/providers/UserProvider'

export const App = () => {
	return (
		<UserProvider>
			<Routes>
				<GlobalStyle />
				<Navigation />
			</Routes>
		</UserProvider>
	)
}

