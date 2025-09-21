import { Container, Row, Col, Card, Button, ListGroup } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import axios from 'axios';

const MyProfile = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios.get("/api/users") // replace with your real backend URL
      .then(res => setUsers(res.data))
      .catch(err => alert(err.toString()));
  }, []);
  return (    
    <Container className="mt-5">
      { users.map ( user => (
          <Row className="justify-content-center">
        <Col md={6}>
          <Card className="text-center">
            <Card.Img 
              variant="top" 
              src="" 
              alt="Profile" 
              style={{ width: '150px', height: '150px', borderRadius: '50%', margin: '20px auto' }}
            />
            <Card.Body>
              <Card.Title></Card.Title>
              <Card.Subtitle className="mb-2 text-muted">User Profile</Card.Subtitle>
              <Card.Text>{user.name}</Card.Text>
              <Button variant="primary" className="m-1">Edit Profile</Button>
              <Button variant="secondary" className="m-1">Change Password</Button>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item><strong>Email:</strong>email</ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
      ))} 
    </Container>
  );
};

export default MyProfile;