import React from 'react';
import Card from 'react-bootstrap/Card'
import ListGroupItem from 'react-bootstrap/ListGroupItem'
import ListGroup from 'react-bootstrap/ListGroup'
import axios from 'axios'

const FriendCard = (props) => {

  // console.log("😐 this is props user", props.user)
  // console.log("🚨 this is props friends", props.friends)

  const acceptHandler = () => {
    console.log("This is the current user's ID", props.user.id)
    console.log("This is the friend's ID", props.friends._id)
    
    let token = localStorage.getItem("jwtToken")

    const requestInfo = {
      requestingUserId: props.user.id,
      requestedUserId: props.friends._id
    }

    axios.post(`${process.env.REACT_APP_API}/api/users/friendrequest`, requestInfo, {headers: {Authorization: `Bearer ${token}`}})
    .then(results => console.log(results))
    .catch(err => console.log(err))
  }

  return (

    <div id="profileCard">

      <img id="lessbtn" src="https://i.imgur.com/19kt8Pv.jpg" />

      <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={`${props.friends.avatar}`} />
  <Card.Body>
    <Card.Title>{props.friends.name}</Card.Title>
    <Card.Text>
      {props.friends.about}
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>Location: {props.friends.location}</ListGroupItem>
    <ListGroupItem>Age: {props.friends.age}</ListGroupItem>
    <ListGroupItem>Languages: {props.friends.languages}</ListGroupItem>
  </ListGroup>
  </Card>

  <img id="addbtn" onClick={() => acceptHandler()} src="https://i.imgur.com/iSV3icM.jpg" />

    </div>
  )
}

export default FriendCard;

