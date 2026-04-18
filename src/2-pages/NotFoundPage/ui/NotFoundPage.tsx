import { Button } from '@mui/material'
import { Link } from 'react-router-dom'
import s from './NotFoudPage.module.css'

export const NotFoundPage = () => {
	return (
		<div className={s.NotFoundPage}>
			<h1>Страница на найдена</h1>
			<Link to='/'>
				<Button variant='contained'>Перейти на главную</Button>
			</Link>
		</div>
	)
}
