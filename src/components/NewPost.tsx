import type { ChangeEvent } from 'react'
import styles from './NewPost.module.css'

function NewPost(props: {
  onBodyChange: (event: ChangeEvent<HTMLTextAreaElement>) => void
  onAuthorChange: (event: ChangeEvent<HTMLInputElement>) => void
}) {
  return (
    <form className={styles.form}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={props.onBodyChange} />
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={props.onAuthorChange} />{' '}
        {/* TODO: add autocomplete */}
      </p>
    </form>
  )
}

export default NewPost
