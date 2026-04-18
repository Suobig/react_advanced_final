import classNames from 'classnames'
import { CartItem } from '../../CartItem'
import type { CartProduct } from '6-shared/types/types'
import s from './CartList.module.css'

type CartListProps = {
	products: CartProduct[]
}
export const CartList = ({ products }: CartListProps) => {
	return (
		<div className={classNames(s['cart-list'])}>
			{products.map((p) => (
				<CartItem product={p} key={p.id} />
			))}
		</div>
	)
}
