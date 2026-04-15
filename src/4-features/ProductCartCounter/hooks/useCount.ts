import { useState, ChangeEvent } from 'react'
import { getValidCount } from '../../../6-shared/utils/getValidCount'

export const useCount = (stock: number) => {
	const [count, setCount] = useState(1)

	const handleCount = (e: ChangeEvent<HTMLInputElement>) => {
		const newCount = +e.target.value
		const validCount = getValidCount(newCount, stock)
		setCount(validCount)
	}
	const handleCountMinus = () => {
		const newCount = count - 1
		const validCount = getValidCount(newCount, stock)
		setCount(validCount)
	}
	const handleCountPlus = () => {
		const newCount = count + 1
		const validCount = getValidCount(newCount, stock)
		setCount(validCount)
	}
	return { count, handleCount, handleCountMinus, handleCountPlus }
}
