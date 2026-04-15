import s from './Logo.module.css'

import { Link } from 'react-router-dom'

import LogoIcon from '../../../../6-shared/assets/icons/logo.svg'

export const Logo = () => {
	return (
		<Link to='/'>
			<img className={s['logo__pic']} src={LogoIcon} alt='Логотип компании' />
		</Link>
	)
}
