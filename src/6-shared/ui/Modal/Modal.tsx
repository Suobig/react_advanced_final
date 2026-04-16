import s from './Modal.module.css'

import {
	KeyboardEventHandler,
	ReactNode,
	useCallback,
	useEffect,
	useLayoutEffect,
	useRef,
} from 'react'
import ReactDOM from 'react-dom'

interface ModalProps {
	children: ReactNode
	isOpen: boolean
	onClose: () => void
}

const rootElement = document.getElementById('root')
const modalRoot = document.getElementById('modal-root')

export const Modal = (props: ModalProps) => {
	const { isOpen, ...otherProps } = props

	useEffect(() => {
		if (isOpen) {
			rootElement?.classList?.add('scroll-blocked')
		}
		return () => {
			rootElement?.classList?.remove('scroll-blocked')
		}
	}, [isOpen])

	if (!modalRoot) {
		throw new Error('#modal-root не найден! Добавьте его вручную в index.html')
	}

	return ReactDOM.createPortal(<ModalInner {...otherProps} />, modalRoot)
}

const ModalInner = function ModalInner(props: Omit<ModalProps, 'isOpen'>) {
	const { onClose, children } = props

	const modalRef = useRef<HTMLDivElement | null>(null)

	useLayoutEffect(() => {
		modalRef?.current?.focus()
	}, [modalRef])

	const handleKeyDown = useCallback<KeyboardEventHandler>(
		(e) => {
			if (
				e.key === 'Escape' &&
				window.confirm(
					'Изменения не будут сохранены. Вы уверены что хотите выйти?'
				)
			) {
				onClose()
			}
		},
		[onClose]
	)

	return (
		<div
			className={s.overlay}
			onClick={onClose}
			role='button'
			onKeyDown={handleKeyDown}
			tabIndex={0}>
			<div
				ref={modalRef}
				className={s.content}
				onClick={(e) => e.stopPropagation()}
				onKeyDown={handleKeyDown}
				role='button'
				tabIndex={0}>
				{children}
			</div>
		</div>
	)
}
