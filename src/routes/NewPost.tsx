import { Form, Link, redirect } from 'react-router-dom'
import Modal from '../components/Modal.tsx'
import type { PostData } from '../types.ts'
import styles from './NewPost.module.css'

function NewPost() {
  return (
    <Modal>
      <Form method="post" className={styles.form}>
        <p>
          <label htmlFor="body">Text</label>
          <textarea id="body" name="body" required rows={3} />
        </p>
        <p>
          <label htmlFor="name">Your name</label>
          <input
            type="text"
            id="name"
            name="author"
            required
            autoComplete="name"
          />
        </p>
        <p className={styles.actions}>
          <Link to=".." type="button">
            Cancel
          </Link>
          <button type="submit">Submit</button>
        </p>
      </Form>
    </Modal>
  )
}

export default NewPost

export async function action({ request }: { request: Request }) {
  const formData = await request.formData()
  const postData = Object.fromEntries(formData) as unknown as PostData

  await fetch('http://localhost:8080/posts', {
    method: 'POST',
    body: JSON.stringify(postData),
    headers: {
      'Content-Type': 'application/json',
    },
  })

  return redirect('/')
}
