import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { Header } from '../3-widgets/Header';
import { Footer } from '../3-widgets/Footer';

import 'react-toastify/dist/ReactToastify.css';
import './styles/normalize.css';
import './styles/styles.css';
import { Box } from '@mui/material';

export const App = () => {
	return (
		<Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
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
	);
};
