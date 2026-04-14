import s from './Search.module.css';

import { useProductsSearchForm } from '../../../hooks/usePostsSearchForm';
import LogoIcon from '../../../../6-shared/assets/icons/cross.svg';

export const Search = () => {
	const { searchValue, setSearchValue } = useProductsSearchForm();

	const handleClearSearchText = () => {
		setSearchValue('');
	};

	return (
		<form className={s['search']}>
			<input
				type='text'
				className={s['search__input']}
				placeholder='Поиск'
				value={searchValue}
				onChange={(e) => setSearchValue(e.target.value)}
			/>
			{searchValue.length > 0 && (
				<button className={s['search__btn']} onClick={handleClearSearchText}>
					<LogoIcon />
				</button>
			)}
		</form>
	);
};
