import { Outlet } from 'react-router-dom'
import PostsList from '../components/PostsList.tsx'
import type { PostData } from '../types.ts'

function Posts() {
  return (
    <>
      <Outlet />
      <main>
        <PostsList />
      </main>
    </>
  )
}

export default Posts

export async function loader() {
  const response = await fetch('http://localhost:8080/posts')
  const resData = (await response.json()) as { posts: PostData[] }
  return resData.posts
}
