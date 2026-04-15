import s from './CartPage.module.css'
import classNames from 'classnames'

import { CartList } from '../../../3-widgets/CartList'
import { CartAmount } from '../../../3-widgets/CartAmount'
import { useAppSelector } from '../../../6-shared/store/utils'
import { cartSelectors } from '../../../6-shared/store/slices/cart'
import { ButtonBack } from '../../../4-features/ButtonBack'

export const CartPage = () => {
	const products = useAppSelector(cartSelectors.getCartProducts)

	if (!products.length) {
		return (
			<>
				<ButtonBack />
				<h1 className='header-title'>Товаров нет в корзине</h1>
			</>
		)
	}

	return (
		<div className={classNames(s['content'], s['container'])}>
			<div className={classNames(s['content-cart'])}>
				<div className={classNames(s['cart-title'])}>
					<span>{products.length}</span> в корзине
				</div>
				<CartList products={products} />
				<CartAmount products={products} />
			</div>
		</div>
	)
}
