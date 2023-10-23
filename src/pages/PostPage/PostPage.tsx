import { useAPi } from '../../hooks/useAPI'
import { postInterface } from '../../interfaces/Posts'
import { useParams } from 'react-router-dom'
import './PostPage.css'

const PostPage = () => {
  const { id } = useParams()
  const { data } = useAPi<postInterface>(
    `http://localhost:3301/posts/ById/${id}`,
  )
  return (
    <div className="post-page">
      <div className="left-side">
        <div className="post-container">
          <div className="post-title">{data?.title}</div>
          <div className="post-body">{data?.postText}</div>
          <div className="post-footer">@{data?.username}</div>
        </div>
      </div>
      <div className="right-side">rightside</div>
    </div>
  )
}

export default PostPage
