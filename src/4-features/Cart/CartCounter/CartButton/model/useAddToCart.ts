import { useCallback } from 'react'
import { cartActions } from '6-shared/store/slices/cart'
import { useAppDispatch } from '6-shared/store/utils'
import type { CartProduct } from '6-shared/types/types'

export const useAddToCart = () => {
	const dispatch = useAppDispatch()
	const addProductToCart = useCallback(
		(cartProduct: CartProduct) => {
			dispatch(cartActions.addCartProduct(cartProduct))
		},
		[dispatch]
	)

	return { addProductToCart }
}
