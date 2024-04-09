import styles from './NewPost.module.css'

function NewPost(props){
   const {onBodyChange, onAuthorChange} = props

    return(
        <>
        <form>
            <div className={styles.form}>
                <label>Text</label>
                <textarea id = 'body' required rows = {3} onChange={onBodyChange}/>
          
                <label>Name</label>
                <input type='text' id='name' required onChange={onAuthorChange}/>
            </div>
        </form>
        
        </>
    );
}

export default NewPost