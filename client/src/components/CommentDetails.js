import { Link } from "react-router-dom";

const CommentDetails = (props) => {
  const {body, author_name, created_at, deleteTheComment} = props
  return(
    <div>
      <p>
        {body}
        <br />
          {author_name}
      </p>
      <p>
        <small>Commented: {created_at.toLocaleString()}</small>
      </p>
      <button onClick={deleteTheComment}>Delete</button>
      {/* <Link to={`/gift/${props.id}`}>Gift this user</Link> */}
    </div>
  )
}

export default CommentDetails
