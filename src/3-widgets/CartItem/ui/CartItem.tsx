import classNames from 'classnames'
import { memo } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import { CartCounter } from '4-features/Cart/CartCounter'
import TrashIcon from '6-shared/assets/icons/trash.svg?react'
import { cartActions } from '6-shared/store/slices/cart'
import type { CartProduct } from '6-shared/types/types'
import s from './CartItem.module.css'

type CartItemProps = {
	product: CartProduct
}
const CartItemComponent = ({ product }: CartItemProps) => {
	const dispatch = useDispatch()
	const { id, name, images, price, discount } = product

	const handleDelete = () => {
		dispatch(cartActions.deleteCartProduct(id))
	}
	return (
		<div className={classNames(s['cart-item'])}>
			<div className={classNames(s['cart-item__desc'])}>
				<img
					src={images}
					alt={name}
					className={classNames(s['cart-item__image'])}
				/>

				<div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
					<div style={{ display: 'flex', gap: '20px', flexGrow: 1 }}>
						<Link
							className={classNames(s['cart-item__title'])}
							to={`/products/${id}`}>
							<h2>{name}</h2>
						</Link>

						<div style={{ display: 'flex', flexDirection: 'column' }}>
							<CartCounter id={id} />

							<div className={classNames(s['cart-item__price'])}>
								<div className={classNames(s['price-big'], s['price-wrap'])}>
									<span
										className={classNames(s['price_old'], s['price_right'])}>
										{price}
									</span>
									<span className={classNames(s['price_discount'], s['price'])}>
										{price - discount}
									</span>
								</div>
							</div>
						</div>
						<button
							className={classNames(s['cart-item__bnt-trash'])}
							onClick={handleDelete}>
							<TrashIcon />
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export const CartItem = memo(CartItemComponent)
