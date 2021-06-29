import { Routes } from './routes/Routes'
import { Navigation } from './components/navigation/Navigation'
import { GlobalStyle } from './shared/styles/GlobalStyle'
import { Footer } from './components/footer/Footer'

export const App = () => {
	return (
		<Routes>
			<GlobalStyle />
			<Navigation />
			<Footer />
		</Routes>
	)
}

