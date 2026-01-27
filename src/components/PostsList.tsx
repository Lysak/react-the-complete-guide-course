import type { ChangeEvent } from 'react'
import { useState } from 'react'
import NewPost from './NewPost.tsx'
import Post from './Post.tsx'
import styles from './PostsList.module.css'

const PostsList = () => {
  const names = ['Dmytrii', 'Lysak']
  const pickName = () => (Math.random() > 0.5 ? names[0] : names[1])

  const [enteredBody, setEnteredBody] = useState('')
  const [enteredAuthor, setEnteredAuthor] = useState('')

  function bodyChangeHandler(event: ChangeEvent<HTMLTextAreaElement>) {
    setEnteredBody(event.target.value)
  }
  function authorChangeHandler(event: ChangeEvent<HTMLInputElement>) {
    setEnteredAuthor(event.target.value)
  }

  return (
    <>
      <NewPost
        onBodyChange={bodyChangeHandler}
        onAuthorChange={authorChangeHandler}
      />
      <ul className={styles.posts}>
        <Post author={enteredAuthor} body={enteredBody} />
        <Post author={pickName()} body="2" />
      </ul>
    </>
  )
}

export default PostsList
