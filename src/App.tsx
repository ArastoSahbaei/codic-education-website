import { Routes } from './routes/Routes'
import { Navigation } from './components/navigation/Navigation'
import { GlobalStyle } from './shared/styles/GlobalStyle'
import { UserProvider } from './shared/providers/UserProvider'
import { ScrollProvider } from './shared/providers/ScrollProvider'

export const App = () => {
	return (
		<UserProvider>
			<ScrollProvider>
				<Routes>
					<GlobalStyle />
					<Navigation />
				</Routes>
			</ScrollProvider>
		</UserProvider>
	)
}

