import { WithProtection } from '../../../6-shared/store/HOCs/WithProtection';
import { WithQuery } from '../../../6-shared/store/HOCs/WithQuery';
import { LoadMore } from '../../../4-features/LoadMore';
import { CardList } from '../../../3-widgets/CardList';
import { useProducts } from '../../../6-shared/store/hooks/useProducts';
import { Sort } from '../../../4-features/Sort';

const CardListWithQuery = WithQuery(CardList);

export const HomePage = WithProtection(() => {
	const { products, isLoading, isError, error } = useProducts();

	console.log(products);

	return (
		<>
			<Sort />
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
