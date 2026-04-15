import s from './Card.module.css'

import classNames from 'classnames'
import { Link } from 'react-router-dom'

import { Price } from '../../../6-shared/ui/Price'
import { LikeButton } from '../../LikeButton'
import { useAppSelector } from '../../../6-shared/store/utils'
import { cartSelectors } from '../../../6-shared/store/slices/cart'
import { useAddToCart } from '../../../6-shared/hooks/useAddToCart'
import { CartCounter } from '../../CartCounter'

type CardProps = {
	product: Product
}
export const Card = ({ product }: CardProps) => {
	const { discount, price, name, tags, id, images, stock } = product
	const cartProducts = useAppSelector(cartSelectors.getCartProducts)
	const isProductInCart = cartProducts.some((p) => p.id === id)
	const isOutOfStock = stock === 0

	const { addProductToCart } = useAddToCart()

	return (
		<article className={s['card']}>
			<div
				className={classNames(
					s['card__sticky'],
					s['card__sticky_type_top-left']
				)}>
				<span className={s['card__discount']}>{discount}</span>
				{tags.length > 0 &&
					tags.map((t) => (
						<span key={t} className={classNames(s['tag'], s['tag_type_new'])}>
							{t}
						</span>
					))}
			</div>
			<div
				className={classNames(
					s['card__sticky'],
					s['card__sticky_type_top-right']
				)}>
				<LikeButton product={product} />
			</div>
			<Link className={s['card__link']} to={`/products/${id}`}>
				<img
					src={images}
					alt={''}
					className={s['card__image']}
					loading='lazy'
				/>
				<div className={s['card__desc']}>
					<Price price={price} discountPrice={discount} />
					<h3 className={s['card__name']}>{name}</h3>
				</div>
			</Link>
			{isProductInCart ? (
				<CartCounter id={id} />
			) : (
				<button
					onClick={() => addProductToCart({ ...product, count: 1 })}
					disabled={isOutOfStock}
					className={classNames(
						s['card__cart'],
						s['card__btn'],
						{ [s['card__btn_type_primary']]: !isOutOfStock },
						{ [s['card__btn_disabled']]: isOutOfStock }
					)}>
					{isOutOfStock ? 'Товар закончился' : 'В корзину'}
				</button>
			)}
		</article>
	)
}
