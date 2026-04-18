import { Box, CircularProgress, Container } from '@mui/material'
import { type SerializedError } from '@reduxjs/toolkit'
import { type FetchBaseQueryError } from '@reduxjs/toolkit/query'
import { type FC, type ComponentType } from 'react'

import { ErrorMessage } from '6-shared/ui/ErrorMessage'
import { getMessageFromError } from '../../utils'

interface WithQueryProps {
	isLoading: boolean
	isError: boolean
	refetch?: () => void
	error?: FetchBaseQueryError | SerializedError | undefined
}

export const WithQuery = <T extends object>(
	WrappedComponent: ComponentType<T>
) => {
	const ReturnedComponent: FC<WithQueryProps & T> = (props) => {
		const { isError, isLoading, refetch, error, ...propsForWrappedComponent } =
			props

		if (isError) {
			const message = getMessageFromError(
				error,
				'Неизвестная ошибка при получение данных'
			)
			return (
				<Container>
					<ErrorMessage message={message} onRetry={refetch} />
				</Container>
			)
		}

		if (isLoading) {
			return (
				<Box sx={{ mt: 10, display: 'flex', justifyContent: 'center' }}>
					<CircularProgress />
				</Box>
			)
		}

		return <WrappedComponent {...(propsForWrappedComponent as T)} />
	}

	ReturnedComponent.displayName = `withQuery${WrappedComponent.displayName}`

	return ReturnedComponent
}
