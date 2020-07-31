import React, { useState, useEffect } from 'react';
import Axios from 'axios';
// import Button from 'react-bootstrap/Button';
// import {BrowserRouter as Router,Route, Link} from 'react-router-dom'
// import Navbar from './content/components/Navbar'
// import { NavLink } from 'react-router-dom'
// import Friends from './Friends' 
// import Request from './content/components/Request'
// import Profile from'./content/components/Profile'
// import LikeProfile from './content/components/LikeProfile'
import FriendCard from './FriendCard'


const Main = (props) => {

    // let [allFriendsArray, setAllFriendsArray] = useState([])

    // let handleClick = () => {
        
    //     Axios.post(`${process.env.REACT_APP_API}/api/users/friendRequests`, )
    // }

    // useEffect( () => {
    //     Axios.get(`${process.env.REACT_APP_API}/api/users`)
    //     .then(allFriends => {
    //         console.log('these are all the users', allFriends.data)
    //         setAllFriendsArray(allFriends.data)
    //     })
    //     .catch(err => console.log(err))
    // }
    // , [])

    const mappedFriends = props.friends.map((friend) => {
        return (
            <div key={friend._id}>
                <FriendCard friends={friend} user={props.user} />
            </div>)
    })
    return (
            <div >
                <div className="newBodyBackground">
                        <section className="mainboxouter">
                            {mappedFriends}

                        </section>
                    </div>
            </div>
    )
}

export default Main;


