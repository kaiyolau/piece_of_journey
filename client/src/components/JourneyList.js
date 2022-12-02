import JourneyDetails from "./JourneyDetails";

export default function JourneyList(props) {
  return(
    <>
      {props.list.map((j, i)=> {
        return (
            <JourneyDetails
              key={i}
              title={j.title}
              body={j.body}
              author={j.author}
              created_at={j.created_at}
            />
        )
      })}
    </>
  )
}
