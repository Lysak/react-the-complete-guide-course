import { useEffect, useState } from 'react'
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
  const [isFetching, setIsFetching] = useState<boolean>(false)

  useEffect(() => {
    async function fetchPosts() {
      setIsFetching(true)
      const response = await fetch('http://localhost:8080/posts')
      const resData = await response.json()
      setPosts(resData.posts)
      setIsFetching(false)
    }

    fetchPosts().catch(console.error)
  }, [])

  async function addPostHandler(postData: { author: string; body: string }) {
    const response = await fetch('http://localhost:8080/posts', {
      method: 'POST',
      body: JSON.stringify(postData),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const resData: { posts: PostData } = await response.json()

    setPosts((existingPost) => [resData.posts, ...existingPost])
  }

  return (
    <>
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost onCancel={onStopPosting} onAddPost={addPostHandler} />
        </Modal>
      )}
      {!isFetching && posts.length > 0 && (
        <ul className={styles.posts}>
          {posts.map((post) => (
            <Post key={post.id} author={post.author} body={post.body} />
          ))}
        </ul>
      )}
      {!isFetching && posts.length === 0 && (
        <div style={{ textAlign: 'center', color: 'white' }}>
          <h2>There are mo posts yet.</h2>
          <p>Start adding some!</p>
        </div>
      )}
      {isFetching && (
        <div style={{ textAlign: 'center', color: 'white' }}>
          <p>Loading posts...</p>
        </div>
      )}
    </>
  )
}

export default PostsList
