import { type ChangeEvent, type FormEvent, useState } from 'react'
import styles from './NewPost.module.css'

interface NewPostProps {
  onCancel: () => void
}

function NewPost({ onCancel }: NewPostProps) {
  const [enteredBody, setEnteredBody] = useState('')
  const [enteredAuthor, setEnteredAuthor] = useState('')

  function bodyChangeHandler(event: ChangeEvent<HTMLTextAreaElement>) {
    setEnteredBody(event.target.value)
  }
  function authorChangeHandler(event: ChangeEvent<HTMLInputElement>) {
    setEnteredAuthor(event.target.value)
  }

  function submitHandler(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const postData = {
      body: enteredBody,
      author: enteredAuthor,
    }
    console.log(postData, 'lysak postData')
    onCancel() // Close modal after submit
  }

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={bodyChangeHandler} />
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input
          type="text"
          id="name"
          required
          onChange={authorChangeHandler}
          autoComplete="name"
        />
      </p>
      <p className={styles.actions}>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
        <button type="submit">Submit</button>
      </p>
    </form>
  )
}

export default NewPost
