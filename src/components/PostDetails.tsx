import { Link, type Params, useLoaderData } from 'react-router-dom'

import Modal from '../components/Modal'
import type { PostData } from '../types.ts'
import styles from './PostDetails.module.css'

function PostDetails() {
  const post = useLoaderData()

  if (!post) {
    return (
      <Modal>
        <main className={styles.details}>
          <h1>Could not find post</h1>
          <p>Unfortunately, the requested post could not be found.</p>
          <p>
            <Link to=".." className={styles.btn}>
              Okay
            </Link>
          </p>
        </main>
      </Modal>
    )
  }
  return (
    <Modal>
      <main className={styles.details}>
        <p className={styles.author}>{post.author}</p>
        <p className={styles.text}>{post.body}</p>
      </main>
    </Modal>
  )
}

export default PostDetails

export async function loader({ params }: { params: Params }) {
  const response = await fetch(`http://localhost:8080/posts/${params.id}`)
  const resData = (await response.json()) as { post: PostData }
  return resData.post
}
