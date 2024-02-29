import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from './components/ExampleCarouselImage.js';
import 'bootstrap/dist/css/bootstrap.min.css';
function IndividualIntervalsExample() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <ExampleCarouselImage text="First slide" />
        <Carousel.Caption>
          <img src="https://cdn.shopclues.com/images/banners/2023/Apr/14/2Platinum_Srushty_14April23.jpg" alt='no image'/>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <ExampleCarouselImage text="Second slide" />
        <Carousel.Caption>
          <img src="https://cdn.shopclues.com/images/banners/2023/Dec/16/HB4_Jdd_Web_Esha_16thDec23.jpg" alt='no image'/>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage text="Third slide" />
        <Carousel.Caption>
          <img src='https://cdn.shopclues.com/images/banners/2024/Jan/30/BKWSB_Web_SYM_30Jan24_New.jpg' alt='no image'/>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default IndividualIntervalsExample;