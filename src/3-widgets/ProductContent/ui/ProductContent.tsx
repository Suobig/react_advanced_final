import s from './ProductContent.module.css'

import classNames from 'classnames'

import { ReviewList } from '../../../3-widgets/ReviewList/ui/ReviewList'
import { ButtonBack } from '../../../4-features/ButtonBack'
import { LikeButton } from '../../../4-features/LikeButton'
import { ProductCartCounter } from '../../../4-features/Product/ProductCartCounter'
import { CartCounter } from '../../../4-features/Cart/CartCounter'
import { useAppSelector } from '../../../6-shared/store/utils'
import { cartSelectors } from '../../../6-shared/store/slices/cart'
import { ReactComponent as TruckSVG } from '../../../6-shared/assets/icons/truck.svg'
import { ReactComponent as QualitySVG } from '../../../6-shared/assets/icons/quality.svg'
import { Rating } from '../../../6-shared/ui/Rating'
import { ProductContext } from '../../../6-shared/hooks/ProductContext'
import { ProductDescription } from '../../../4-features/Product/ProductDescription'
import { InfoBlock } from '../../../6-shared/ui/InfoBlock'
import { getProductRating } from '../model/getProductRating'

interface ProductContentProps {
	product?: Product
}

export const ProductContent = ({ product }: ProductContentProps) => {
	const cartProducts = useAppSelector(cartSelectors.getCartProducts)

	if (!product) {
		return <></>
	}

	const { id, name, images, description, price, discount } = product
	const rating = getProductRating(product)

	const isProductInCart = !!cartProducts.find((p) => p.id === id)
	return (
		<ProductContext product={product}>
			<ButtonBack />
			<h1 className={s.title}>{name}</h1>
			<p className='article'>
				Артикул: <b>2388907</b>
			</p>
			<Rating rating={rating} />
			<div className={s.product}>
				<div className={classNames(s['product__img-wrapper'])}>
					<img src={images} alt={description} />
				</div>
				<div className={classNames(s['product__desc'])}>
					<div className={classNames(s['price-big'], s['price-wrap'])}>
						<span className={classNames(s['price_old'], s['price_left'])}>
							{`${price} ₽`}
						</span>
						<span className={classNames(s['price_discount'], s['price'])}>
							{`${price - discount} ₽`}
						</span>
					</div>

					{isProductInCart ? <CartCounter id={id} /> : <ProductCartCounter />}

					<LikeButton product={product} />
					<InfoBlock icon={<TruckSVG />} title={'Доставка по всему Миру!'}>
						<p className={classNames(s['product__text'])}>
							Доставка курьером — <span className='bold'> от 399 ₽</span>
						</p>
						<p className={classNames(s['product__text'])}>
							Доставка в пункт выдачи —
							<span className={classNames(s['product__bold'])}> от 199 ₽</span>
						</p>
					</InfoBlock>
					<InfoBlock icon={<QualitySVG />} title={'Гарантия качества'}>
						<p className={classNames(s['product__text'])}>
							Если Вам не понравилось качество нашей продукции, мы вернем
							деньги, либо сделаем все возможное, чтобы удовлетворить ваши
							нужды.
						</p>
					</InfoBlock>
				</div>
			</div>
			<ProductDescription />
			<ReviewList />
		</ProductContext>
	)
}
