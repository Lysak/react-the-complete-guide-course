import type { PropsWithChildren } from 'react'
import styles from './Modal.module.css'

interface ModalProps extends PropsWithChildren {
  onClose: () => void
}

const Modal = ({ children, onClose }: ModalProps) => {
  return (
    <>
      <div className={styles.backdrop} onClick={onClose} />
      <dialog open className={styles.modal}>
        {children}
      </dialog>
    </>
  )
}

export default Modal
