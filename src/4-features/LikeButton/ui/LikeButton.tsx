import classNames from 'classnames'
import { memo, useOptimistic, useState } from 'react'
import { toast } from 'react-toastify'

import LikeSvg from '6-shared/assets/icons/like.svg?react'
import {
	useSetLikeProductMutation,
	useDeleteLikeProductMutation,
	type IErrorResponse,
} from '6-shared/store/api/productsApi'
import { userSelectors } from '6-shared/store/slices/user'
import { useAppSelector } from '6-shared/store/utils'
import s from './LikeButton.module.css'

type TLikeButtonProps = {
	isLike: boolean
	productId: string
}
const LikeButtonComponent = ({ isLike, productId }: TLikeButtonProps) => {
	const [innerIsLike] = useState(isLike)

	const accessToken = useAppSelector(userSelectors.getAccessToken)

	const [isOptimisticLike, setOptimisticLike] = useOptimistic(innerIsLike)

	const [setLike] = useSetLikeProductMutation()
	const [deleteLike] = useDeleteLikeProductMutation()

	const toggleLike = async () => {
		if (!accessToken) {
			toast.warning('Вы не авторизованы')
			return
		}

		const likeMutation = isOptimisticLike ? deleteLike : setLike
		setOptimisticLike(!isOptimisticLike)
		const response = await likeMutation({ id: `${productId}` })

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

export const LikeButton = memo(LikeButtonComponent)
