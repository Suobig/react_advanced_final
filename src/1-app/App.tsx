import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { Box } from '@mui/material'

import { Header } from '3-widgets/Header'
import { Footer } from '3-widgets/Footer'

import 'react-toastify/dist/ReactToastify.css'
import './styles/normalize.css'
import './styles/styles.css'
import { useAnalytics } from '6-shared/hooks/useAnalytics'

export const App = () => {
	const [onClick] = useAnalytics()

	return (
		<Box
			sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}
			onClick={onClick}>
			<Header />
			<Box sx={{ p: 3, flexGrow: 1 }}>
				<Outlet />
			</Box>
			<ToastContainer
				position='top-right'
				autoClose={5000}
				hideProgressBar={false}
				pauseOnHover
				theme='colored'
			/>
			<Footer />
		</Box>
	)
}
