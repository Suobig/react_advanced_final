import { objectHasProperty } from './common'

export const getMessageFromError = (
	error: unknown,
	defaultErrorMessage: string
) => {
	if (objectHasProperty(error, 'message') && typeof error.message === 'string')
		return error.message

	if (objectHasProperty(error, 'error') && typeof error.error === 'string')
		return error.error

	return defaultErrorMessage
}
