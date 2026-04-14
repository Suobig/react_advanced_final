import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { Header } from '3-widgets/Header';
import { Footer } from '3-widgets/Footer';
import { Sort } from '6-shared/ui/Sort';

import 'react-toastify/dist/ReactToastify.css';
import './styles/normalize.css';
import './styles/styles.css';

export const App = () => {
	return (
		<>
			<Header />
			<Sort />
			<Outlet />
			<ToastContainer
				position='top-right'
				autoClose={5000}
				hideProgressBar={false}
				pauseOnHover
				theme='colored'
			/>
			<Footer />
		</>
	);
};
