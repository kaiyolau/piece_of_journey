import CommentDetails from "./CommentDetails";

export default function CommentList(props) {
  const comments = props.list
  return(
    <div>
      <h4>Comment List</h4>
      <ul>
        {
          comments ?
          comments.map((a,i) => {
            return <CommentDetails key={i}
            body={a.body}
            author_name={a.author_full_name}
            created_at={a.created_at}
            id={a.id}
            deleteTheComment={() => props.deleteTheComment(a.id)}
            />
          })
          :
          null
        }
      </ul>
    </div>
  )
}
