import classNames from 'classnames'

import { useProductContext } from '6-shared/hooks/useProductContext'
import { CartButton } from '../../../Cart/CartCounter/CartButton'
import { useCount } from '../hooks/useCount'
import s from './ProductCartCounter.module.css'

export const ProductCartCounter = () => {
	const product = useProductContext()
	const { stock } = product

	const { count, handleCount, handleCountMinus, handleCountPlus } = useCount(
		product.stock
	)

	if (stock === 0) {
		return (
			<div className={classNames('product__btn-wrap')}>Товар закончился</div>
		)
	}

	return (
		<div className={classNames(s['product__btn-wrap'])}>
			<div className={s['button-count']}>
				<button className={s['button-count__minus']} onClick={handleCountMinus}>
					-
				</button>
				<input
					type='number'
					className={s['button-count__num']}
					value={count}
					onChange={handleCount}
				/>
				<button className={s['button-count__plus']} onClick={handleCountPlus}>
					+
				</button>
			</div>
			<CartButton product={product} count={count} />
		</div>
	)
}
