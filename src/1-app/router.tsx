import { createBrowserRouter } from 'react-router-dom'

import { App } from './App'
import { HomePage } from '2-pages/HomePage'
import { ProductPage } from '2-pages/ProductPage'
import { NotFoundPage } from '2-pages/NotFoundPage'
import { ProfilePage } from '2-pages/ProfilePage'
import { FavoritesPage } from '2-pages/FavoritesPage'
import { SignUpPage } from '2-pages/SignUpPage'
import { SignInPage } from '2-pages/SignInPage'
import { CartPage } from '2-pages/CartPage'

export const RoutePath: Record<string, `/${string}` | '*'> = {
	home: '/',
	favorites: '/favorites',
	products: '/products:productId',
	profile: '/profile',
	cart: '/cart',
	signup: '/signup',
	signin: '/signin',
	not_found: '*',
}

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
])
