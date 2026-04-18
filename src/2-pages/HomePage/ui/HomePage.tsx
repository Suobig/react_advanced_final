import { CardList } from '3-widgets/CardList'
import { LoadMore } from '4-features/LoadMore'
import { SortControl } from '4-features/SortControl'
import { WithProtection } from '6-shared/store/HOCs/WithProtection'
import { WithQuery } from '6-shared/store/HOCs/WithQuery'
import { useProducts } from '6-shared/store/hooks/useProducts'

const CardListWithQuery = WithQuery(CardList)

export const HomePage = WithProtection(() => {
	const { products, isLoading, isError, error } = useProducts()

	return (
		<>
			<SortControl />
			<CardListWithQuery
				title='Все товары'
				isLoading={isLoading}
				isError={isError}
				products={products}
				error={error}
			/>
			<LoadMore isReady={!isLoading && !isError} />
		</>
	)
})
