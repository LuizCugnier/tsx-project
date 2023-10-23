import { commentInterface } from '../../interfaces/Comments'

export type commentProps = {
  comment: commentInterface
}

const Comment = ({ comment }: commentProps) => {
  return <div className="comment-container">-{comment.commentBody}</div>
}

export default Comment
