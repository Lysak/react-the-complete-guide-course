import { Link } from 'react-router-dom'
import styles from './Post.module.css'

interface PostProps {
  id: string
  author: string
  body: string
}

const Post = ({ id, author, body }: PostProps) => {
  return (
    <li className={styles.post}>
      <Link to={`/posts/${id}`}>
        <p className={styles.author}>{author}</p>
        <p className={styles.text}>{body}</p>
      </Link>
    </li>
  )
}

export default Post
