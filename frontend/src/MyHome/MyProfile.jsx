import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import axios from 'axios';


const MyProfile = () => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    axios.get("/api/users/2")
      .then(res => setUser(res.data))
      .catch( err => console.log(err));
  }, []);

  return (    
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <Card>
            <Card.Img 
              variant="top" 
              src="https://img.freepik.com/free-vector/isolated-young-handsome-man-different-poses-white-background-illustration_632498-859.jpg?semt=ais_incoming&w=740&q=80" 
              alt="Profile" 
              style={{ width: '150px', height: '150px', borderRadius: '50%', margin: '20px auto' }}
            />
            <Card.Body className="justify-content-center">
              <Card.Title className="text-center">Your Profile Information</Card.Title>
              <Row className='mt-5'>
                <Col className="col-md-3 offset-md-3">Name</Col>
                <Col className="col-md-6">{user.name}</Col>
              </Row>
              <Row className='mt-3'>
                <Col className="col-md-3 offset-md-3">Email</Col>
                <Col className="col-md-6">{user.email}</Col>
              </Row>
              <Row className='mt-3'>
                <Col className="col-md-3 offset-md-3">Address</Col>
                <Col className="col-md-6">{user.address}</Col>
              </Row>
              <Row className='mt-3 mb-3'>
                <Col className="col-md-3 offset-md-3">Phone Number</Col>
                <Col className="col-md-6">{user.phone}</Col>
              </Row>
              <Row className="justify-content-center">
                <Col className='md-12 d-flex justify-content-center'>
                  <Button variant="primary" className="m-1">Edit Profile</Button>
                  <Button variant="secondary" className="m-1">Change Password</Button>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default MyProfile;