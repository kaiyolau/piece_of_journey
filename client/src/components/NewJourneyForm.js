import React from 'react';
import FormErrors from './FormErrors';
import { Form, Button, Input } from 'semantic-ui-react'

const NewJourneyForm = props => {

    const getDataAndSubmit = (event) => {
        //get the form data
        //pass it into the function from the props
        //props.submitForm
        event.preventDefault();

        const fd = new FormData(event.currentTarget); //after summit, the data will store it in FormData
        console.log('this is Formdata from NewJourneyForm',fd.get("title"), fd.get("body"), fd.get("weather")) //so we need to get it out
        props.submitForm(
            {
                title: fd.get("title"), //put that on submitForm() thorugh props, transfer to parent component.
                body: fd.get("body"),
                weather: fd.get("weather"),
                tagging: fd.get("tagging")
            }
        )

        event.currentTarget.reset()

    }

    return(
        <Form  onSubmit={getDataAndSubmit}>
            <Form.Group widths='equal'>
                <Form.Field label='Create the title of your journey' control='input'  name="title" id="" />
                <FormErrors forField="title" errors={props.errors} />
                <Form.Field label='select the wester of today' control='select'  name="weather" id="" >
                    <option value='Sunny'>Sunny</option>
                    <option value='Cloudy'>Cloudy</option>
                    <option value='Rainy'>Rainy</option>
                    <option value='Snowy'>Snowy</option>
                    <option value='Tornadoes'>Tornadoes</option>
                    <option value='Thunderstorms'>Thunderstorms</option>
                    <option value='typhoons'>typhoons</option>
                    <option value='Blizzards'>Blizzards</option>
                    <option value='Droughts'>Droughts</option>
                </Form.Field>
                <FormErrors forField="weather" errors={props.errors} />
            </Form.Group>

            <Form.Field label='write about your day...' control='textarea' rows='20'  name="body" id="" />
            <FormErrors forField="body" errors={props.errors} />

            <div class="ui placeholder segment">
                <div class="ui icon header">
                    <i class="pdf file outline icon"></i>
                    No documents are listed for this customer.
                </div>
                <input  type="file" name="image" id=""  forField="image" class="ui primary button"/>
            </div>

            <Form.Field
                id='form-button-control-public'
                control={Button}
                content='Create Journey'
                label='Upload your Journey'
                type="submit"
                value="Create Journey"
            />
        </Form>
    )
}

export default NewJourneyForm;
