import JourneyDetails from "./JourneyDetails";
import CommentList from "./CommentList";
import { useState, useEffect } from 'react';
// import journeyData from '../journeyData';
import { Journey } from '../requests';

export default function JourneyShowPage(props) {

  const [ journey, setJourney] = useState({})


    useEffect(() => {

      // console.log(props.match.params.id)
      Journey.show(props.match.params.id) //no more hard copy - display the first that matches. Have access o the params ant the match method through our router
      .then((fetchedAPIjourney) => {
        setJourney(fetchedAPIjourney)
        // console.log(fetchedAPIjourney)
      })
    }, [])



  const deleteTheComment = id => {
    const {comments, ...rest} = journey;
    setJourney({

        comments: comments.filter(a => a.id !== id),
        ...rest

    })
  }



    const { title, body, author, address, created_at, weather,tag_names, image } = journey
    return(
      <div>
        <JourneyDetails
          title={title}
          body={body}
          author={author}
          created_at={created_at}
          weather={weather}
          address={address}
          image={image}
          />
          {/* <button onClick={()=>{delete()}}>Delete The Journey</button> */}

        <CommentList
        list={
          journey.comments
        }
        deleteTheComment={(id) => deleteTheComment(id)}
        />

      </div>
    )

}



