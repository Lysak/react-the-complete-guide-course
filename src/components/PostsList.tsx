import { useState } from 'react'
import Modal from './Modal.tsx'
import NewPost from './NewPost.tsx'
import Post from './Post.tsx'
import styles from './PostsList.module.css'

interface PostsListProps {
  isPosting: boolean
  onStopPosting: () => void
}

interface PostData {
  id: string
  author: string
  body: string
}

const PostsList = ({ isPosting, onStopPosting }: PostsListProps) => {
  const [posts, setPosts] = useState<PostData[]>([])

  function addPostHandler(postData: { author: string; body: string }) {
    const newPost = { ...postData, id: crypto.randomUUID() }
    setPosts((existingPost) => [newPost, ...existingPost])
  }

  return (
    <>
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost onCancel={onStopPosting} onAddPost={addPostHandler} />
        </Modal>
      )}
      {posts.length > 0 && (
        <ul className={styles.posts}>
          {posts.map((post) => (
            <Post key={post.id} author={post.author} body={post.body} />
          ))}
        </ul>
      )}
      {posts.length === 0 && (
        <div style={{ textAlign: 'center', color: 'white' }}>
          <h2>There are mo posts yet.</h2>
          <p>Start adding some!</p>
        </div>
      )}
    </>
  )
}

export default PostsList
