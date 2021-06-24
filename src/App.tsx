import { Routes } from './routes/Routes'
import { Navigation } from './components/navigation/Navigation'
import { GlobalStyle } from './shared/styles/GlobalStyle'

export const App = () => {
	return (
		<Routes>
			<GlobalStyle />
			<Navigation />
		</Routes>
	)
}

