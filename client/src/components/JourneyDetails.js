function JourneyDetails(props) {



  return(
    <>
      <h2>{props.title}</h2>
      <p>
        {props.body}
        <br />
        weather: {props.weather}
      </p>
      <p>
        <small>
          {props.address} location
          <br></br>
          Created: {props.created_at ? props.created_at.toLocaleString() : null}
          <br></br>
          Image :
          {props.image}
        </small>
      </p>

    </>
  )

}

export default JourneyDetails;
