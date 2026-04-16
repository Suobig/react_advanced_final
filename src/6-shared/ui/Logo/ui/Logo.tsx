import s from './Logo.module.css'

import { Link } from 'react-router-dom'

import LogoIcon from '6-shared/assets/icons/logo.svg?react'

export const Logo = () => {
	return (
		<Link to='/'>
			<LogoIcon className={s['logo__pic']} />
		</Link>
	)
}
