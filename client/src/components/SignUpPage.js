import React from 'react';
import { User } from '../requests';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';

const SignUpPage = (props) => {
    const { onSignUp } = props;
    const handleSubmit = event => {
        const { currentTarget } = event
        event.preventDefault()
        const formData = new FormData(currentTarget)
        const params = { user: {
            first_name: formData.get('first_name'),
            last_name: formData.get('last_name'),
            email: formData.get('email'),
            password: formData.get('password'),
            password_confirmation: formData.get('password_confirmation')
        }
        }
        User.create(params).then(user => {
            if(user?.id){
                onSignUp() // store the user in the App state
                props.history.push('/journeys') //navigate to index
            }
        })
    }

    return(
        <main>
            <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
                <Grid.Column style={{ maxWidth: 450 }}>
                <Header as='h2' color='teal' textAlign='center'>
                    <Image src='./logo192.png' /> Sign-in to your account
                </Header>
                <Form size='large' onSubmit={handleSubmit} >
                    <Segment stacked>
                    <Form.Input fluid icon='user' iconPosition='left' placeholder='first_name' name="first_name" id="first_name"  />
                    <Form.Input fluid icon='user' iconPosition='left' placeholder='last_name' name="last_name" id="last_name"  />
                    <Form.Input fluid icon='user' iconPosition='left' placeholder='email' name="email" id="email"  />
                    <Form.Input
                        fluid
                        icon='lock'
                        iconPosition='left'
                        placeholder='Password'
                        type='password'
                        name="password"
                        id="password"
                    />
                    <Form.Input
                        fluid
                        icon='lock'
                        iconPosition='left'
                        placeholder='password_confirmation'
                        type='password_confirmation'
                        name="password_confirmation"
                        id="password_confirmation"
                    />

                    <Button color='teal' fluid size='large' type="submit" value="Sign Up" >
                        Sign Up
                    </Button>
                    </Segment>
                </Form>
                </Grid.Column>
            </Grid>
        </main>
    )
}

export default SignUpPage;

