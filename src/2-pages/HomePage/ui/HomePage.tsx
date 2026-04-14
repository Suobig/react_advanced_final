import { WithProtection } from '6-shared/store/HOCs/WithProtection';
import { WithQuery } from '6-shared/store/HOCs/WithQuery';
import { LoadMore } from '6-shared/ui/LoadMore';
import { CardList } from '3-widgets/CardList';
import { useProducts } from '6-shared/store/hooks/useProducts';

const CardListWithQuery = WithQuery(CardList);

export const HomePage = WithProtection(() => {
	const { products, isLoading, isError, error } = useProducts();

	return (
		<>
			<CardListWithQuery
				title='Лакомства'
				isLoading={isLoading}
				isError={isError}
				products={products}
				error={error}
			/>
			<LoadMore />
		</>
	);
});
