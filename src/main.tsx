import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
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
            path: '/create-post',
            element: <NewPost />,
            action: newPostAction,
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
