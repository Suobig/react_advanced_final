const MIN_COUNT = 1
const MAX_COUNT = 99

export function getValidCount(count: number, stock: number): number {
	let validCount = count

	if (validCount > stock) {
		validCount = stock
	}

	if (validCount > MAX_COUNT) {
		return MAX_COUNT
	}

	if (validCount < MIN_COUNT) {
		return MIN_COUNT
	}

	return validCount
}
