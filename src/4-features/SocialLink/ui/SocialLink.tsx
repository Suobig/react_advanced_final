import { SocialLinkIcon } from '../model/SocialLinkIcon'
import type { SocialType } from '../model/SocialLink.types'
import s from './SocialLink.module.css'

interface SocialLinkProps {
	type: SocialType
	href: string
}

export default function SocialLink({ type, href }: SocialLinkProps) {
	return (
		<a className={s['socials__link']} href={href}>
			<SocialLinkIcon type={type} />
		</a>
	)
}
