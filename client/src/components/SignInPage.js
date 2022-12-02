import React, { useState } from 'react';
import {Session} from '../requests';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';
import {NavLink} from 'react-router-dom';

function SignInPage(props){
    const { onSignIn } = props; //got it from App.js Nav, props pass horzontlly, thorugh files
    //this is destructing, take it out onSignIn from props object
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [errors, setErrors] = useState([])
    function handleSubmit(event){ //this function to wrap it up to params : {email:value, password: value}, act like formData
        event.preventDefault();
        // const { currentTarget } = event;
        // const formData = new FormData(currentTarget)
        const params = {
            email: email,
            password: password
        }

        Session.create(params).then(data => { //this is to match the input uder match with database
            if (data.status === 404) {
                setErrors([...errors, {message: "Wrong email or password"}])
            }
            else if (data.id){
                onSignIn() // this is to fetch data from current_user
                //Navigate to Index page from the browser
                //We can 'push' on history to manipulate the browser
                //and direct our user to any page in our app
                props.history.push('/journeys')
            }
        })
    }

    return(
        <main>

            {errors.length > 0 ? (
                    <div>
                        <h4>Failed to Sign In</h4>
                        <p>{errors.map(error => error.message).join(", ")}</p>
                    </div>
                ) : (
                    ""
                )}

            <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
                <Grid.Column style={{ maxWidth: 450 }}>
                <Header as='h2' color='teal' textAlign='center'>
                    <Image src='./logo192.png' /> Log-in to your account
                </Header>
                <Form size='large' onSubmit={handleSubmit} >
                    <Segment stacked>
                    <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address'
                    onChange={event => {setEmail(event.currentTarget.value)}}
                    />
                    <Form.Input
                        fluid
                        icon='lock'
                        iconPosition='left'
                        placeholder='Password'
                        type='password'
                        onChange={event => {setPassword(event.currentTarget.value)}}
                    />

                    <Button color='teal' fluid size='large' type="submit" value="Sign In" >
                        Login
                    </Button>
                    </Segment>
                </Form>
                <Message>
                    New to us? <NavLink className="item" to='/sign_up'>Sign Up</NavLink>
                </Message>
                </Grid.Column>
            </Grid>
        </main>
    )
}

export default SignInPage;
