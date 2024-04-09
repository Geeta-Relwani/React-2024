import { useState } from 'react'
import './App.css'
import PostList from './components/PostList'
import MainHeader from './components/MainHeader'

function App() {


  const [ isModalVisible, setIsModalVisible] = useState(true)


  function hideModalHandler(){
    setIsModalVisible(false)
  }


  function ShowModalHandler(){
    setIsModalVisible(true)
  }

  return (
    <>
    <MainHeader onCreatePost={ShowModalHandler}/>
    <main>
      <PostList isPosting={isModalVisible} onStopPosting={hideModalHandler}/>
     </main>
    </>
  )
}

export default App
