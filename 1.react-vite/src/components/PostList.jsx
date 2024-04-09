import { useState } from "react";
import NewPost from "./NewPost";
import Post from "./Post";
import Modal from './Modal'

function PostList (props){

    const {isPosting, onStopPosting} = props

    const [ textArea , setTextArea] = useState('')
    const [ author , setAuthor] = useState('')


    function BodyChangeHandler(event){
        setTextArea(event.target.value)
        console.log(textArea)
    }

    function authorChangeHandler(event){
        setAuthor(event.target.value)
    }

  
    return(
        <>
        { isPosting?
        <Modal onClose={onStopPosting}>
        <NewPost 
            onBodyChange={BodyChangeHandler} 
            onAuthorChange={authorChangeHandler}/>
        </Modal> : null}
        <Post author={author} post={textArea} />
        <Post author={author} post={textArea} />
        </>
    )

}

export default PostList