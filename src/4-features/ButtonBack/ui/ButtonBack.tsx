import { useNavigate } from 'react-router-dom'
import { Button } from '@mui/material'

import BackSvg from '6-shared/assets/icons/back.svg?react'

export const ButtonBack = () => {
	const navigate = useNavigate()
	return (
		<Button
			variant='text'
			color='secondary'
			onClick={() => navigate('/')}
			startIcon={<BackSvg />}>
			На главный
		</Button>
	)
}
