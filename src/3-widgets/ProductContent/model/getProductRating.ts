import type { Product } from '6-shared/types/types'

export function getProductRating(product: Product) {
	return Math.round(product.reviews.reduce((acc, next) => acc + next.rating, 0))
}
