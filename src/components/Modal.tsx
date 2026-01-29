import type { PropsWithChildren } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './Modal.module.css'

interface ModalProps extends PropsWithChildren {}

const Modal = ({ children }: ModalProps) => {
  const navigate = useNavigate()
  function closeHandler() {
    navigate('..')
  }

  return (
    <>
      <div className={styles.backdrop} onClick={closeHandler} />
      <dialog open className={styles.modal}>
        {children}
      </dialog>
    </>
  )
}

export default Modal
