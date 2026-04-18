import { memo } from 'react'

import Star from '6-shared/assets/icons/star.svg?react'

interface RatingProps {
	rating?: number
	isEdit?: boolean
	onChange?: (rating: number) => void
}

const RatingComponent = ({
	rating = 0,
	isEdit = false,
	onChange,
}: RatingProps) => {
	return (
		<div>
			{[...Array(5)].map((_e, i) => (
				<span key={i} style={{ cursor: isEdit ? 'pointer' : 'default' }}>
					<Star
						onClick={() => isEdit && onChange?.(i)}
						fill={i <= rating ? 'gold' : 'gray'}
					/>
				</span>
			))}
		</div>
	)
}

export const Rating = memo(RatingComponent)
