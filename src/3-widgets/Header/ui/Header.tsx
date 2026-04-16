import s from './Header.module.css'

import { memo, useState } from 'react'
import classNames from 'classnames'

import { Search } from '../../../4-features/Search'
import { Logo } from '../../../6-shared/ui/Logo'
import { useAppSelector } from '../../../6-shared/store/utils'
import { userSelectors } from '../../../6-shared/store/slices/user'
import { isLiked } from '../../../6-shared/utils'
import { useProducts } from '../../../6-shared/store/hooks/useProducts'
import { cartSelectors } from '../../../6-shared/store/slices/cart'
import { ReactComponent as IconCart } from '../../../6-shared/assets/icons/cart.svg'
import { ReactComponent as IconFavorites } from '../../../6-shared/assets/icons/favorites.svg'
import { ReactComponent as IconUser } from '../../../6-shared/assets/icons/user.svg'
import { ReactComponent as IconExit } from '../../../6-shared/assets/icons/exit.svg'
import { ProfileModal } from '../../ProfileModal/ui/ProfileModal'
import { HeaderLink } from '../../../4-features/HeaderLink'

const HeaderComponent = () => {
	const [isProfileOpen, setIsProfileOpen] = useState(false)
	const { products } = useProducts()
	const user = useAppSelector(userSelectors.getUser)
	const cartProducts = useAppSelector(cartSelectors.getCartProducts)

	const likeCount = products.filter((product) =>
		isLiked(product.likes, user?.id)
	).length

	const accessToken = useAppSelector(userSelectors.getAccessToken)

	return (
		<>
			<header className={s.header}>
				<div className={classNames('container', s.header__wrapper)}>
					<Logo />
					<Search />
					<div className={s['header__icons-menu']}>
						<HeaderLink
							to='/favorites'
							icon={<IconFavorites />}
							count={likeCount}
						/>
						<HeaderLink
							to='/favorites'
							icon={<IconCart />}
							count={cartProducts.length}
						/>
						{accessToken && (
							<>
								<button
									className={s['header__icons-menu-item']}
									onClick={() => setIsProfileOpen(true)}>
									<IconUser />
								</button>
								<HeaderLink to='/signin' icon={<IconExit />} />
							</>
						)}
					</div>
				</div>
			</header>
			{isProfileOpen && (
				<ProfileModal
					isOpen={isProfileOpen}
					onClose={() => setIsProfileOpen(false)}
				/>
			)}
		</>
	)
}

export const Header = memo(HeaderComponent)
