import { useState, type ChangeEvent, useCallback } from 'react'
import { getValidCount } from '6-shared/utils/getValidCount'

export const useCount = (stock: number) => {
	const [count, setCount] = useState(1)

	const handleCount = useCallback(
		(e: ChangeEvent<HTMLInputElement>) => {
			const newCount = +e.target.value
			const validCount = getValidCount(newCount, stock)
			setCount(validCount)
		},
		[stock]
	)

	const handleCountMinus = useCallback(() => {
		const newCount = count - 1
		const validCount = getValidCount(newCount, stock)
		setCount(validCount)
	}, [count, stock])

	const handleCountPlus = useCallback(() => {
		const newCount = count + 1
		const validCount = getValidCount(newCount, stock)
		setCount(validCount)
	}, [count, stock])

	return { count, handleCount, handleCountMinus, handleCountPlus }
}
