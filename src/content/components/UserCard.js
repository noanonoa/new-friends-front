import React from 'react';
import Card from 'react-bootstrap/Card'
import ListGroupItem from 'react-bootstrap/ListGroupItem'
import ListGroup from 'react-bootstrap/ListGroup'

const UserCard = (props) => {
  return (

    <div id="profileCard">
      <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://i.imgur.com/HS3dlA3.jpg" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>Cras justo odio</ListGroupItem>
    <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
    <ListGroupItem>Vestibulum at eros</ListGroupItem>
  </ListGroup>
  <Card.Body>
    {/* <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link> */}
  </Card.Body>
</Card>
    </div>
  )
}

export default UserCard;



{/* //     <h2>User Profile Card</h2>
        //     <div class="card">
        //       <img src="https://i.imgur.com/HS3dlA3.jpg" alt="John" style="width:100%" />
        //       <h1>John Doe</h1>
        //       <p class="title">CEO & Founder, Example</p>
        //       <p>Harvard University</p>
        //       <div >
                
        //     </div>
        //     <p><button>Contact</button></p>
        // </div> */}