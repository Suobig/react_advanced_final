import { CircularProgress, Stack } from '@mui/material'
import { useRef } from 'react'
import { SuccessMessage } from '6-shared/ui/SuccesMessage'
import { useLoadMore } from '../hooks/useLoadMore'

interface LoadMoreProps {
	isReady: boolean
}

export const LoadMore = (props: LoadMoreProps) => {
	const { isReady } = props

	const ref = useRef<HTMLDivElement>(null)
	const { isEndOfList, isFetching } = useLoadMore({ ref })

	if (!isReady) {
		return <></>
	}

	return (
		<Stack
			ref={ref}
			direction='row'
			justifyContent='center'
			alignItems='center'
			sx={{ my: 5 }}>
			{isFetching && <CircularProgress />}
			{isEndOfList && <SuccessMessage message='End of list!' />}
		</Stack>
	)
}
