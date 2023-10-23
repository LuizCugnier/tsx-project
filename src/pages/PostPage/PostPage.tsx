import { useAPi } from '../../hooks/useAPI'
import { postInterface } from '../../interfaces/Posts'
import { useParams } from 'react-router-dom'
import { commentInterface } from '../../interfaces/Comments'
import Comment from '../../components/Comment/Comment'

import './PostPage.css'
import axios from 'axios'
import { useState } from 'react'

const PostPage = () => {
  const { id } = useParams()
  const [newComment, setNewComment] = useState('')
  const { data: postData } = useAPi<postInterface>(
    `http://localhost:3301/posts/ById/${id}`,
  )
  const { data: commentData } = useAPi<commentInterface[]>(
    `http://localhost:3301/comments/${id}`,
  )

  const addComment = () => {
    axios
      .post(`http://localhost:3301/comments`, {
        commentBody: newComment,
        PostId: id,
      })
      .then(() => {
        commentData?.push({
          commentBody: newComment,
        })
        setNewComment('')
      })
  }

  return (
    <div className="post-page">
      <div className="left-side">
        <div className="post-container">
          <div className="post-title">{postData?.title}</div>
          <div className="post-body">{postData?.postText}</div>
          <div className="post-footer">@{postData?.username}</div>
        </div>
      </div>
      <div className="right-side">
        <h1>Comments</h1>
        <div className="input-comments-container">
          <input
            type="text"
            placeholder="Comentario aqui"
            className="input-comment"
            onChange={(event) => {
              setNewComment(event.target.value)
            }}
            value={newComment}
          ></input>
          <button className="createpost-button" onClick={addComment}>
            Send
          </button>
        </div>
        <div className="comments-container">
          {commentData?.map((comment, key) => {
            return <Comment key={key} comment={comment} />
          })}
        </div>
      </div>
    </div>
  )
}

export default PostPage
