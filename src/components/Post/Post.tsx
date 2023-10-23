import { postInterface } from '../../interfaces/Posts'
import './Post.css'

export type PostProps = {
  post: postInterface
}

const Post = ({ post }: PostProps) => {
  return (
    <div className="post-container">
      <div className="post-title">{post.title}</div>
      <div className="post-body">{post.postText}</div>
      <div className="post-footer">@{post.username}</div>
    </div>
  )
}

export default Post
