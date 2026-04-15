import { CardList } from '../../../3-widgets/CardList'
import { Sort } from '../../../4-features/Sort'
import { LoadMore } from '../../../4-features/LoadMore'
import { useProducts } from '../../../6-shared/store/hooks/useProducts'
import { WithQuery } from '../../../6-shared/store/HOCs/WithQuery'
import { WithProtection } from '../../../6-shared/store/HOCs/WithProtection'

const CardListWithQuery = WithQuery(CardList)

export const HomePage = WithProtection(() => {
	const { products, isLoading, isError, error } = useProducts()

	return (
		<>
			<Sort />
			<CardListWithQuery
				title='Все товары'
				isLoading={isLoading}
				isError={isError}
				products={products}
				error={error}
			/>
			<LoadMore />
		</>
	)
})
