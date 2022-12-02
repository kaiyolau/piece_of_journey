import React from 'react';
import { Session } from '../requests';
import {NavLink} from 'react-router-dom';

const NavBar = ({ currentUser, onSignOut }) => {
    const handleSignOut = () => {
        Session.destroy().then(() => {
            onSignOut()
        })
    }
    return(
        <div className="ui secondary menu">
            <NavLink className="active item" to='/journeys'>List of journeys</NavLink>

            {
                currentUser ? (
                    <>
                        <NavLink className="item" to='/journeys/new'>Question New</NavLink>
                        <span className="ui small header" >Welcome, { currentUser.first_name }</span>
                        <button className="ui red button" onClick={handleSignOut}>Sign Out</button>
                    </>
                ) : (
                    <>
                        <NavLink className="item" to='/sign_in'>Sign In</NavLink>

                        <NavLink className="item" to='/sign_up'>Sign Up</NavLink>

                    </>
                )

            }
            <div class="right menu">
                <div class="item">
                    <div class="ui icon input">
                        <input type="text" placeholder="Search..."/>
                        <i aria-hidden="true" class="search icon"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar;


