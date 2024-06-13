import Carousel from 'react-bootstrap/Carousel';
import "./HomeBanner.css";
import { Col, Container, Row } from 'react-bootstrap';

function HomeBanner() {
  return (
    <Container>
      <Row className='banner shadow rounded mt-3'>
        <Col>
        <Carousel>
      <Carousel.Item>
        <img src="https://img.freepik.com/free-vector/electronics-store-template-design_23-2151143831.jpg" alt="" className='carousel-image' />
        <Carousel.Caption className='carousel-caption'>
          <h3>Big Billion Days</h3>
          <p>Hurry before stocks run out!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="https://www.shutterstock.com/image-vector/electronics-promotional-shopping-sale-computer-260nw-1190458762.jpg" alt="" className='carousel-image' />
        <Carousel.Caption className='carousel-caption'>
          <h3>Super Sale</h3>
          <p>Special offer | Limited time only</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="https://i.pinimg.com/736x/9a/13/dc/9a13dc79ca4368d6c87acb2e52cadf9d.jpg" alt="" className='carousel-image' />
        <Carousel.Caption className='carousel-caption'>
          <h3>Fresh stock arrived</h3>
          <p>offer available on selected stocks only</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </Col>
      </Row>
    </Container>
  );
}

export default HomeBanner;