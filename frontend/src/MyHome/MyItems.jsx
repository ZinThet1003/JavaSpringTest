import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

function MyItems() {
  const items = [
    { id: 1, name: "Laptop", price: 1200 },
    { id: 2, name: "Phone", price: 800 },
    { id: 3, name: "Headphones", price: 200 }
  ];

  return (
    <Container>
      <div className="d-flex justify-content-around">
        {items.map(item => (
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="logo.svg/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              {item.name}
            </Card.Text>
            <Button variant="primary">Add To Cart</Button>
          </Card.Body>
        </Card>
      ))}
      </div>
    </Container>
  );
}

export default MyItems;