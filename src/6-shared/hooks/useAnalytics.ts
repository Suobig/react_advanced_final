import { MouseEventHandler, useCallback, useRef } from 'react'

type Analytics = {
	clicks: number
	timeStart: number
}

export const useAnalytics = () => {
	const analyticsRef = useRef<Analytics>({
		clicks: 0,
		timeStart: Date.now(),
	})

	const onClick = useCallback<MouseEventHandler>(
		(e) => {
			const timeClick = Date.now()
			const timeDiff =
				Math.round((timeClick - analyticsRef.current.timeStart) / 100) / 10
			const clickNum = analyticsRef.current.clicks + 1
			console.log(
				`Click #${clickNum}. Time since last click: ${timeDiff}s. X: ${e.screenX}, Y: ${e.screenY}`
			)
			analyticsRef.current.clicks += 1
			analyticsRef.current.timeStart = timeClick
		},
		[analyticsRef]
	)

	return [onClick]
}
