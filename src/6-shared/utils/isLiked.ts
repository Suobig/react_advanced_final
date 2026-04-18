import type { Like } from '6-shared/types/types'

export const isLiked = (likes: Like[], userId: string | undefined) =>
	likes?.some((favorite) => favorite.userId === userId)
