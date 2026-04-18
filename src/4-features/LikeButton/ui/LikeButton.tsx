import s from './LikeButton.module.css'
import classNames from 'classnames'
import { toast } from 'react-toastify'
import { useOptimistic } from 'react'

import { useAppSelector } from '6-shared/store/utils'
import { userSelectors } from '6-shared/store/slices/user'
import {
	useSetLikeProductMutation,
	useDeleteLikeProductMutation,
	type IErrorResponse,
} from '6-shared/store/api/productsApi'
import LikeSvg from '6-shared/assets/icons/like.svg?react'

type TLikeButtonProps = {
	isLike: boolean
	productId: string
}
export const LikeButton = ({ isLike, productId }: TLikeButtonProps) => {
	const accessToken = useAppSelector(userSelectors.getAccessToken)

	const [isOptimisticLike, setOptimisticLike] = useOptimistic(isLike)

	const [setLike] = useSetLikeProductMutation()
	const [deleteLike] = useDeleteLikeProductMutation()

	console.log({ isLike, isOptimisticLike })

	const toggleLike = async () => {
		if (!accessToken) {
			toast.warning('Вы не авторизованы')
			return
		}
		let response
		if (isOptimisticLike) {
			setOptimisticLike(false)
			response = await deleteLike({ id: `${productId}` })
		} else {
			setOptimisticLike(true)
			response = await setLike({ id: `${productId}` })
		}

		if (response.error) {
			const error = response.error as IErrorResponse
			toast.error(error.data.message)
		}
	}

	return (
		<button
			className={classNames(s['card__favorite'], {
				[s['card__favorite_is-active']]: isOptimisticLike,
			})}
			onClick={toggleLike}>
			<LikeSvg />
		</button>
	)
}
