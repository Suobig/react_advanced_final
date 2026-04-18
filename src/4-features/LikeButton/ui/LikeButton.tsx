import classNames from 'classnames'
import { memo, useOptimistic, useTransition } from 'react'
import { toast } from 'react-toastify'

import LikeSvg from '6-shared/assets/icons/like.svg?react'
import {
	useSetLikeProductMutation,
	useDeleteLikeProductMutation,
} from '6-shared/store/api/productsApi'
import { userSelectors } from '6-shared/store/slices/user'
import { useAppSelector } from '6-shared/store/utils'
import { getMessageFromError } from '6-shared/utils'

import s from './LikeButton.module.css'

type TLikeButtonProps = {
	isLike: boolean
	productId: string
}
const LikeButtonComponent = ({ isLike, productId }: TLikeButtonProps) => {
	const accessToken = useAppSelector(userSelectors.getAccessToken)

	const [optimisticIsLike, setOptimisticIsLike] = useOptimistic(isLike)
	const [_, startTransition] = useTransition()

	const [setLike] = useSetLikeProductMutation()
	const [deleteLike] = useDeleteLikeProductMutation()

	const toggleLike = async () => {
		if (!accessToken) {
			toast.warning('Вы не авторизованы')
			return
		}

		const likeMutation = optimisticIsLike ? deleteLike : setLike

		startTransition(async () => {
			setOptimisticIsLike(!optimisticIsLike)
			const response = await likeMutation({ id: `${productId}` })

			if (response.error) {
				const error = getMessageFromError(response.error, 'Неизвестная ошибка')
				toast.error(error)
			}
		})
	}

	return (
		<button
			className={classNames(s['card__favorite'], {
				[s['card__favorite_is-active']]: optimisticIsLike,
			})}
			onClick={toggleLike}>
			<LikeSvg />
		</button>
	)
}

export const LikeButton = memo(LikeButtonComponent)
