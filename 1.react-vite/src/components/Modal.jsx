import styles from './Modal.module.css'

function Modal({children, onClose}){

    // children is reserved react prop for 
    //content that will be passed in between custom componets
    // eg <Modal><NewPost></Modal>
    // so in place of {children} it will output the content of NewPost
    return(
        <div className={styles.backdrop} onClick={onClose}>
            <dialog open className={styles.modal}>
                {children}
            </dialog>
        </div>
    )

}

export default Modal