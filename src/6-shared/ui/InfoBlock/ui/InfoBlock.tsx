import { memo, type ReactNode } from 'react'
import s from './InfoBlock.module.css'

interface InfoBlockProps {
	icon: ReactNode
	title: string
	children: ReactNode
}

const InfoBlockContent = (props: InfoBlockProps) => {
	const { icon, title, children } = props
	return (
		<div className={s.root}>
			<div className={s.icon}>{icon}</div>
			<div className={s.right}>
				<h3 className={s.name}>{title}</h3>
				{children}
			</div>
		</div>
	)
}

export const InfoBlock = memo(InfoBlockContent)
