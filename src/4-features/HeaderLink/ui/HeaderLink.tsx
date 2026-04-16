import s from './HeaderLink.module.css'

import { type ReactNode } from 'react'
import { Link } from 'react-router-dom'

interface HeaderLinkProps {
	to: string
	icon: ReactNode
	count?: number
}

export const HeaderLink = (props: HeaderLinkProps) => {
	const { to, icon, count = null } = props
	return (
		<Link className={s['header__favorites-link']} to={to}>
			{icon}
			{count !== null ? (
				<span className={s['header__icon-bubble']}>{count}</span>
			) : null}
		</Link>
	)
}
