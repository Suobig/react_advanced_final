export type ProductsData = {
	products: Product[]
	length: number
}

export type Category = {
	id: number
	name: string
	slug: string
}

export type Review = BaseDates & {
	id: string
	user: User
	text: string
	rating: number
	product: ReviewProduct
}

export type Role = 'USER'

export type FavoritePost = {
	id: string
	userId: string
	postId: string
	post: Post
}

export type Post = BaseDates & {
	id: string
	userId: string
	title: string
	slug: string
	description: string
	body: string
	images: string
	tags: string[]
	isPublished: boolean
	favoritesCount: number
}

export type BaseLike = {
	id: string
	userId: string
	productId: string
}

export type Like = BaseLike & {
	user: LikeUser
}

export type ReviewUserLike = BaseLike & {
	product: ReviewProduct
}

export type BaseUser = {
	id: string
	roles: Role[]
	name: string
	email: string
	phone: string
	avatarPath: string
	about: string
}

export type User = BaseUser & {
	likes: ReviewUserLike[]
	favoritesPost: FavoritePost[]
}

export type LikeUser = BaseDates &
	BaseUser & {
		provider: null
		isAdmin: boolean
		isBlocked: boolean
		password: string
	}

export type BaseProduct = BaseDates & {
	id: string
	name: string
	description: string
	price: number
	images: string
	slug: string
	discount: number
	isPublished: boolean
	stock: number
	tags: string[]
}

export type Product = BaseProduct & {
	reviews: Review[]
	category: Category
	user: User
	likes: Like[]
}

export type ReviewProduct = BaseProduct & {
	categoryId: number
	userId: string
	wight: string
}

export type CartProduct = Product & {
	count: number
}

export type BaseDates = {
	createdAt: string
	updatedAt?: string
}

export type Sort = 'high-price' | 'low-price' | 'newest' | 'oldest'

export type Token = {
	accessToken: string
}

export type SignUpFormValues = {
	email: string
	password: string
}
