import { useParams } from 'react-router-dom'

import { ProductContent } from '../../../3-widgets/ProductContent/ui/ProductContent'
import { WithProtection } from '../../../6-shared/store/HOCs/WithProtection'
import { WithQuery } from '../../../6-shared/store/HOCs/WithQuery'
import { useGetProductQuery } from '../../../6-shared/store/api/productsApi'

const ProductContentWithQuery = WithQuery(ProductContent)

export const ProductPage = WithProtection(() => {
	const { productId = '' } = useParams()

	const {
		data: product,
		isLoading,
		isError,
		error,
	} = useGetProductQuery({ id: productId }, { skip: !productId })

	return (
		<ProductContentWithQuery
			isLoading={isLoading}
			isError={isError}
			error={error}
			product={product}
		/>
	)
})
