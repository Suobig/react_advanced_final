import { createBrowserRouter } from 'react-router-dom';

import { App } from '1-app/App';
import { HomePage } from '2-pages/HomePage';
import { ProductPage } from '2-pages/ProductPage';
import { NotFoundPage } from '2-pages/NotFoundPage';
import { ProfilePage } from '2-pages/ProfilePage';
import { FavoritesPage } from '2-pages/FavoritesPage';
import { SignUpPage } from '2-pages/SignUpPage';
import { SignInPage } from '2-pages/SignInPage';
import { CartPage } from '2-pages/CartPage';

export enum AppRoutes {
	HOME = 'home',
	FAVORITES = 'favorites',
	PRODUCTS = 'products',
	PROFILE = 'profile',
	CART = 'cart',
	SIGNUP = 'signup',
	SIGNIN = 'signin',
	NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, `/${string}` | '*'> = {
	[AppRoutes.HOME]: '/',
	[AppRoutes.FAVORITES]: '/favorites',
	[AppRoutes.PRODUCTS]: '/products/:productId',
	[AppRoutes.PROFILE]: '/profile',
	[AppRoutes.CART]: '/cart',
	[AppRoutes.SIGNUP]: '/signup',
	[AppRoutes.SIGNIN]: '/signin',
	[AppRoutes.NOT_FOUND]: '*',
};

export const router = createBrowserRouter([
	{
		path: RoutePath.home,
		element: <App />,
		children: [
			{
				index: true,
				element: <HomePage />,
			},
			{
				path: RoutePath.favorites,
				element: <FavoritesPage />,
			},
			{
				path: RoutePath.products,
				element: <ProductPage />,
			},
			{
				path: RoutePath.profile,
				element: <ProfilePage />,
			},
			{
				path: RoutePath.cart,
				element: <CartPage />,
			},
			{
				path: RoutePath.signup,
				element: <SignUpPage />,
			},
			{
				path: RoutePath.signin,
				element: <SignInPage />,
			},

			// last route
			{
				path: RoutePath.not_found,
				element: <NotFoundPage />,
			},
		],
	},
]);
