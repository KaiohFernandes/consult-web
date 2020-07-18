import Slider from "react-slick";

import slide from '../../assets/images/slide.png'
import { Container } from './styles';

function SlickSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <Container>
      <Slider {...settings}>
        <div>
          <img
            src={slide}
            alt="Consult - Crédito Inteligente"
            title="Consult - Crédito Inteligente"
          />
        </div>
      </Slider>
    </Container>
  )
}

export default SlickSlider;
