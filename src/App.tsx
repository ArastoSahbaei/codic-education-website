import { Routes } from './routes/Routes'
import { Navigation } from './components/navigation/Navigation'
import { GlobalStyle } from './shared/styles/GlobalStyle'
import { UserProvider } from './shared/providers/UserProvider'
import { ScrollProvider } from './shared/providers/ScrollProvider'
import { Space } from './components/space'
import { useNavHeight } from './hooks/useNavHeight'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const App = () => {
	const { navHeight } = useNavHeight()

	return (
		<UserProvider>
			<ScrollProvider>
				<Routes>
					<GlobalStyle />
					<Navigation />
					<Space space={navHeight} />
					<ToastContainer
						position="bottom-left"
						autoClose={5000}
						hideProgressBar={false}
						newestOnTop
						closeOnClick
						rtl={false}
						pauseOnFocusLoss
						draggable
						pauseOnHover
					/>
				</Routes>
			</ScrollProvider>
		</UserProvider>
	)
}

