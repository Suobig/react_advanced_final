import { WithProtection } from '6-shared/store/HOCs/WithProtection';
import { WithQuery } from '6-shared/store/HOCs/WithQuery';
import { useProducts } from '6-shared/store/hooks/useProducts';
import { ButtonBack } from '6-shared/ui/ButtonBack';
import { CardList } from '3-widgets/CardList';

const CardListWithQuery = WithQuery(CardList);

export const FavoritesPage = WithProtection(() => {
	const { isLoading, isError, products, error } = useProducts();

	return (
		<>
			<br />
			<ButtonBack />
			<CardListWithQuery
				title='Избранные'
				isLoading={isLoading}
				isError={isError}
				products={products}
				error={error}
			/>
		</>
	);
});
