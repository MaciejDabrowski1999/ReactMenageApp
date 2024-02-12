import { useRef, forwardRef, useImperativeHandle } from 'react'
import { createPortal } from 'react-dom'
import Button from './Button'

const Modal = forwardRef(function Modal({ children, buttonCaption }, ref) {
	const dialog = useRef()
	useImperativeHandle(ref, () => {
		return {
			open() {
				dialog.current.showModal()
			},
		}
	})

	return createPortal(
		<dialog ref={dialog} className="backdrop:bg-stone-900/90 rounded-md p-4 text-center w-1/3">
			{children}
			<form action="dialog">
				<Button>{buttonCaption}</Button>
			</form>
		</dialog>,
		document.getElementById('modal-root')
	)
})

export default Modal
