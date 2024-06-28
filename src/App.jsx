import { Provider } from 'react-redux'
import Footer from './components/layout/Footer/Footer'
import Header from './components/layout/Header/Header'
import Home from './components/screens/Home/Home'
import { store } from './redux/store'

const App = () => {
	return (
		<>
			<Provider store={store}>
				<Header />
				<Home />
				<Footer />
			</Provider>
		</>
	)
}

export default App
