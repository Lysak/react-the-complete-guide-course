import styles from './Post.module.css'

const Post = (props: { author: string; body: string }) => {
  const { author, body } = props

  return (
    <li className={styles.post}>
      <p className={styles.author}>{author}</p>
      <p className={styles.text}>{body}</p>
    </li>
  )
}

export default Post
