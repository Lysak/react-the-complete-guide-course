import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import PostDetails, {
  loader as postDetailsLoader,
} from './components/PostDetails.tsx'
import NewPost, { action as newPostAction } from './routes/NewPost.tsx'
import Posts, { loader as postsLoader } from './routes/Posts.tsx'
import RootLayout, { HydrateFallback } from './routes/RootLayout.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    HydrateFallback: HydrateFallback,
    children: [
      {
        path: '/',
        element: <Posts />,
        loader: postsLoader,
        children: [
          {
            //TODO: implement rest here
            path: '/create-post',
            element: <NewPost />,
            action: newPostAction,
          },
          {
            path: '/posts/:id',
            element: <PostDetails />,
            loader: postDetailsLoader,
          },
        ],
      },
    ],
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
