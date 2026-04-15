import { useNavigate } from 'react-router-dom'
import { ReactComponent as BackSvg } from '../../../6-shared/assets/icons/back.svg'
import { Button } from '@mui/material'

export const ButtonBack = () => {
	const navigate = useNavigate()
	return (
		<Button
			variant='text'
			color='secondary'
			onClick={() => navigate(-1)}
			startIcon={<BackSvg />}>
			Назад
		</Button>
	)
}
