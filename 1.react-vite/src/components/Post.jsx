import React from "react";
import styles from "./Post.module.css"

function Post(props){

    const {author, post} = props

    return(
        <>
        <div className={styles.post}>
            <div className={styles.post}>{post}</div>
            <div className={styles.author}>{author}</div>
        </div>
        </>
    )

}

export default Post