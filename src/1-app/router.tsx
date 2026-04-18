import { createBrowserRouter } from 'react-router-dom'

import { CartPage } from '2-pages/CartPage'
import { FavoritesPage } from '2-pages/FavoritesPage'
import { HomePage } from '2-pages/HomePage'
import { NotFoundPage } from '2-pages/NotFoundPage'
import { ProductPage } from '2-pages/ProductPage'
import { ProfilePage } from '2-pages/ProfilePage'
import { SignInPage } from '2-pages/SignInPage'
import { SignUpPage } from '2-pages/SignUpPage'
import { App } from './App'

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
