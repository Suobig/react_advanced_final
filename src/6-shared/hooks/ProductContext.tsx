import { createContext, ReactNode, useContext } from 'react'

const Context = createContext<Product | null>(null)

interface ProductContextProps {
	product: Product
	children: ReactNode
}

export const ProductContext = (props: ProductContextProps) => {
	const { product } = props
	return <Context.Provider value={product}>{props.children}</Context.Provider>
}

export const useProductContext = () => {
	const context = useContext(Context)

	if (context === null) {
		throw new Error(
			'useProductContext должен быть использован внутри ProductContext'
		)
	}

	return context
}
