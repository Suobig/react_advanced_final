import { ChangeEvent } from 'react'
import { useDispatch } from 'react-redux'
import {
	cartActions,
	cartSelectors,
} from '../../../../6-shared/store/slices/cart'
import { useAppSelector } from '../../../../6-shared/store/utils'
import { getValidCount } from '../../../../6-shared/utils/getValidCount'

export const useCount = (productId: string) => {
	const dispatch = useDispatch()
	const products = useAppSelector(cartSelectors.getCartProducts)
	const product = products.find((p) => p.id === productId) as CartProduct

	const { id, count, stock } = product
	const handleIncrement = () => {
		const newCount = count + 1
		const validCount = getValidCount(newCount, stock)
		dispatch(cartActions.setCartProductCount({ id, count: validCount }))
	}
	const handleDecrement = () => {
		const newCount = count - 1
		if (newCount <= 0) {
			dispatch(cartActions.deleteCartProduct(id))
		} else {
			dispatch(cartActions.setCartProductCount({ id, count: newCount }))
		}
	}
	const handleSetCount = (e: ChangeEvent<HTMLInputElement>) => {
		const newCount = +e.target.value
		const validCount = getValidCount(newCount, stock)
		dispatch(cartActions.setCartProductCount({ id, count: validCount }))
	}
	return { count, stock, handleSetCount, handleIncrement, handleDecrement }
}
