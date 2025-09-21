import Carousel from 'react-bootstrap/Carousel';
import '../Styles/style.css'
function PreView() {
  return (
    <div className='slidelabel'>
      <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <Carousel.Caption className='slidelabel'>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
    
  );
}

export default PreView;