import {
	type KeyboardEventHandler,
	type MouseEventHandler,
	type ReactNode,
	useCallback,
	useEffect,
	useLayoutEffect,
	useRef,
} from 'react'
import ReactDOM from 'react-dom'
import s from './Modal.module.css'

interface ModalProps {
	children: ReactNode
	isOpen: boolean
	onClose: () => void
	onClick?: MouseEventHandler
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
	const { onClose, onClick, children } = props

	const modalRef = useRef<HTMLDivElement | null>(null)

	useLayoutEffect(() => {
		modalRef?.current?.focus()
	}, [modalRef])

	const handleKeyDown = useCallback<KeyboardEventHandler>(
		(e) => {
			if (e.key === 'Escape') {
				onClose()
			}
		},
		[onClose]
	)

	const handleClick = useCallback<MouseEventHandler>(
		(e) => {
			e.stopPropagation()
			onClick?.(e)
		},
		[onClick]
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
				onClick={handleClick}
				onKeyDown={handleKeyDown}
				role='button'
				tabIndex={0}>
				{children}
			</div>
		</div>
	)
}
