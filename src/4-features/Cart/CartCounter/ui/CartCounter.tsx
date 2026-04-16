import s from './CartCounter.module.css'

import classNames from 'classnames'

import { useCount } from '../model/useCount'
import { memo } from 'react'

interface CartCounterProps {
	id: string
}
const CartCounterComponent = ({ id }: CartCounterProps) => {
	const { count, stock, handleSetCount, handleIncrement, handleDecrement } =
		useCount(id)

	return (
		<>
			<div className={classNames(s['button-count'])}>
				<button
					onClick={handleDecrement}
					className={classNames(s['button-count__minus'])}>
					-
				</button>
				<input
					onChange={handleSetCount}
					type='number'
					className={classNames(s['button-count__num'])}
					value={count}
				/>
				<button
					onClick={handleIncrement}
					className={classNames(s['button-count__plus'])}
					disabled={count >= stock}>
					+
				</button>
			</div>
		</>
	)
}

export const CartCounter = memo(CartCounterComponent)
