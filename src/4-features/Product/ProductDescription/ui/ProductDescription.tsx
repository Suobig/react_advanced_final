import { memo } from 'react'

import { useProductContext } from '6-shared/hooks/useProductContext'
import s from './ProductDescription.module.css'

const ProductDescriptionContent = () => {
	const product = useProductContext()

	const { description, price } = product

	return (
		<div className={s.root}>
			<h2 className={s.title}>Описание</h2>
			<p className={s.subtitle}>{description}</p>
			<h2 className={s.title}>Характеристики</h2>
			<div className={s.grid}>
				<div className={s.naming}>Вес</div>
				<div className={s.description}>1 шт 120-200 грамм</div>
				<div className={s.naming}>Цена</div>
				<div className={s.description}>{price} ₽</div>
				<div className={s.naming}>Польза</div>
				<div className={s.description}>
					<p>
						Большое содержание аминокислот и микроэлементов оказывает
						положительное воздействие на общий обмен веществ собаки.
					</p>
					<p>Способствуют укреплению десен и жевательных мышц.</p>
					<p>
						Развивают зубочелюстной аппарат, отвлекают собаку во время смены
						зубов.
					</p>
					<p>
						Имеет цельную волокнистую структуру, при разжевывание получается
						эффект зубной щетки, лучше всего очищает клыки собак.
					</p>
					<p>Следует учесть высокую калорийность продукта.</p>
				</div>
			</div>
		</div>
	)
}

export const ProductDescription = memo(ProductDescriptionContent)
