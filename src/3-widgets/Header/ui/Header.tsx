import s from './Header.module.css'

import { memo, useState } from 'react'
import classNames from 'classnames'

import { Search } from '4-features/Search'
import { Logo } from '6-shared/ui/Logo'
import { useAppSelector } from '6-shared/store/utils'
import { userSelectors } from '6-shared/store/slices/user'
import { isLiked } from '6-shared/utils'
import { useProducts } from '6-shared/store/hooks/useProducts'
import { cartSelectors } from '6-shared/store/slices/cart'
import IconCart from '6-shared/assets/icons/cart.svg?react'
import IconFavorites from '6-shared/assets/icons/favorites.svg?react'
import IconUser from '6-shared/assets/icons/user.svg?react'
import IconExit from '6-shared/assets/icons/exit.svg?react'
import { ProfileModal } from '../../ProfileModal/ui/ProfileModal'
import { HeaderLink } from '4-features/HeaderLink'

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
					{accessToken && <Search />}
					<div className={s['header__icons-menu']}>
						{accessToken && (
							<>
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
