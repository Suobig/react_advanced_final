import Instagram from '6-shared/assets/images/instagram.svg?react'
import Telegram from '6-shared/assets/images/telegram.svg?react'
import Viber from '6-shared/assets/images/viber.svg?react'
import Whatsapp from '6-shared/assets/images/whatsapp.svg?react'
import Vk from '6-shared/assets/images/vk.svg?react'
import type { SocialType } from './SocialLink.types'
import { typeGuardFunction } from '6-shared/utils/typeGuardFunction'

interface SocialLinkIconProps {
	type: SocialType
}

export const SocialLinkIcon = ({ type }: SocialLinkIconProps) => {
	switch (type) {
		case 'Instagram':
			return <Instagram />
		case 'Telegram':
			return <Telegram />
		case 'Viber':
			return <Viber />
		case 'Vk':
			return <Vk />
		case 'Whatsapp':
			return <Whatsapp />
		default: {
			if (!typeGuardFunction(type)) {
				throw new Error('Ureachable!')
			}
		}
	}
}
