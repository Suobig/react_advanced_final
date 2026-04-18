import cn from 'classnames'

import { useAddToCart } from '../model/useAddToCart'
import s from './CartButton.module.css'
import type { Product } from '6-shared/types/types'

interface CartButtonProps {
	product: Product
	outOfStock?: boolean
	count: number
}

export const CartButton = (props: CartButtonProps) => {
	const { product, outOfStock = false, count } = props
	const { addProductToCart } = useAddToCart()

	const text = outOfStock ? 'Товар закончился' : 'В корзину'

	return (
		<button
			onClick={() => addProductToCart({ ...product, count })}
			className={cn(s.root, { [s.disabled]: outOfStock })}>
			{text}
		</button>
	)
}
