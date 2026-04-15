import s from './LikeButton.module.css'
import classNames from 'classnames'
import { toast } from 'react-toastify'

import { useAppSelector } from '../../../6-shared/store/utils'
import { userSelectors } from '../../../6-shared/store/slices/user'
import {
	useSetLikeProductMutation,
	useDeleteLikeProductMutation,
	IErrorResponse,
} from '../../../6-shared/store/api/productsApi'
import { ReactComponent as LikeSvg } from '../../../6-shared/assets/icons/like.svg'

type TLikeButtonProps = {
	product: Product
}
export const LikeButton = ({ product }: TLikeButtonProps) => {
	const accessToken = useAppSelector(userSelectors.getAccessToken)
	const user = useAppSelector(userSelectors.getUser)

	const [setLike] = useSetLikeProductMutation()
	const [deleteLike] = useDeleteLikeProductMutation()

	const isLike = product?.likes.some((l) => l.userId === user?.id)

	const toggleLike = async () => {
		if (!accessToken) {
			toast.warning('Вы не авторизованы')
			return
		}
		let response
		if (isLike) {
			response = await deleteLike({ id: `${product.id}` })
		} else {
			response = await setLike({ id: `${product.id}` })
		}

		if (response.error) {
			const error = response.error as IErrorResponse
			toast.error(error.data.message)
		}
	}

	return (
		<button
			className={classNames(s['card__favorite'], {
				[s['card__favorite_is-active']]: isLike,
			})}
			onClick={toggleLike}>
			<LikeSvg />
		</button>
	)
}
