import Modal from './Modal.tsx'
import NewPost from './NewPost.tsx'
import Post from './Post.tsx'
import styles from './PostsList.module.css'

interface PostsListProps {
  isPosting: boolean
  onStopPosting: () => void
}

const PostsList = ({ isPosting, onStopPosting }: PostsListProps) => {
  const names = ['Dmytrii', 'Lysak']
  const pickName = () => (Math.random() > 0.5 ? names[0] : names[1])

  return (
    <>
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost onCancel={onStopPosting} />
        </Modal>
      )}
      <ul className={styles.posts}>
        <Post author={pickName()} body="2" />
      </ul>
    </>
  )
}

export default PostsList
