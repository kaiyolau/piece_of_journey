// import JourneyDetails from "./JourneyDetails";
import { useState, useEffect } from 'react';
import { Journey } from '../requests';
import { Link, NavLink } from 'react-router-dom';
import { Header, Icon, Image, Menu, Segment, Sidebar, Item } from 'semantic-ui-react';


export default function JourneyIndexPage() {
    const [journeys, setJourneys] = useState([])

    useEffect(() => {
        Journey.index()
        .then((journeysData) => {
            setJourneys(journeysData)
        })
    }, [])
    const deleteJourney = (id) =>{
        console.log(id)
        //we can't reset the value of state in this way
        // this.state.journeys = this.state.journeys.filter(q => q.id != id)
        //you can only reset the value by using this.setState()

        setJourneys(
            journeys.filter(q => q.id !== id)
        )
    }




    return(
        <>
            <div className="ui internally celled grid">
                <div className="row">
                    <div className="two wide column">
                        <Sidebar.Pushable as={Segment}>
                            <Sidebar
                            as={Menu}
                            animation='overlay'
                            icon='labeled'
                            inverted
                            vertical
                            visible
                            width='thin'
                            >
                                <Link className='item' to='/sign_in'>
                                    <Icon name='home' />
                                    Home
                                </Link>
                                <Menu.Item as='a'>
                                    <Icon name='map' />
                                    location of Journey
                                </Menu.Item>
                                <Link className='item' to='/journeys'>
                                    <Icon name='list' />
                                    list of Journey
                                </Link>
                            </Sidebar>
                        </Sidebar.Pushable>
                    </div>


                    <div className="ten wide column">
                            {journeys.map((j,i) => {
                            return (
                                    <div className="row">
                                    <Item.Group>
                                            <Link className="item"  key={j.id} to={`/journeys/${j.id}`}>
                                                <Item.Image size='small' src='./logo192.png' />
                                                <Item.Content>
                                                    <Item.Header as='a'>{j.title}</Item.Header>
                                                    <Item.Description>
                                                        <p>{j.body}</p>
                                                        <p>{j.created_at}</p>
                                                    </Item.Description>
                                                </Item.Content>
                                            </Link>
                                        </Item.Group>
                                                    {/* <div onClick={e => e.stopPropagation()} >
                                                        <button  className="ui circular icon button" onClick={() => { deleteJourney(j.id) }}>
                                                            <i aria-hidden="true" className="delete icon"></i>
                                                        </button>
                                                    </div> */}
                                    </div>
                                )
                        })}
                    </div>



                    <div className="three wide column">
                    <img/>
                </div>
            </div>
            </div>
        </>
    )
}


