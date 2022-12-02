import React, { Component } from 'react';
import { Journey } from '../requests';
import NewJourneyForm from './NewJourneyForm';

class NewJourneyPage extends Component {
    constructor(props){
        super(props);
        this.state = { errors: [] };
        this.createNewJourney = this.createNewJourney.bind(this)
    }

    createNewJourney(params) {
        Journey.create(params)
        .then((journey) => {
            console.log(journey)
            if (!journey.errors) {
                this.props.history.push(`/journeys/${journey.id}`)
            } else {
                this.setState({errors: journey.errors})
            }
        })
    }

    render(){
        return(
            <div>
                <NewJourneyForm errors={this.state.errors} submitForm={(params) => this.createNewJourney(params)} />
            </div>
        )
    }
}

export default NewJourneyPage;


