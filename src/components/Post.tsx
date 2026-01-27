import styles from './Post.module.css'

interface PostProps {
  author: string
  body: string
}

const Post = ({ author, body }: PostProps) => {
  return (
    <li className={styles.post}>
      <p className={styles.author}>{author}</p>
      <p className={styles.text}>{body}</p>
    </li>
  )
}

export default Post
