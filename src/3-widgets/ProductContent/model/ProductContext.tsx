import { createContext, ReactNode } from 'react'

import { useGetProductQuery } from '6-shared/store/api/productsApi'

const Context = createContext<Product | null>(null)

interface ProductContextProps {
	id: string
	children: ReactNode
}

export const ProductContext = (props: ProductContextProps) => {
	const { id } = props

	const { data: product = null } = useGetProductQuery({ id })

	return <Context.Provider value={product}></Context.Provider>
}
