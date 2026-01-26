const Post = (props: { author: () => string; body: string }) => {
  const { author, body } = props

  return (
    <div>
      <h1>{author()}</h1>
      <p>{body}</p>
    </div>
  )
}

export default Post
