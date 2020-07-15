import Slider from "react-slick";

import { Container, Item, ItemImage, ItemDescription } from './styles';
import Title from '../Title';
import slide from '../../assets/images/asnobrasil.png'

function Partners() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <Container>
      <Title>PARCEIROS</Title>

      <Slider {...settings}>
        <div>
          <Item>
            <ItemImage>
              <img src={slide} />
            </ItemImage>
            <ItemDescription>
              <Title>ASNO BRASIL</Title>
              <a href="https://asnobrasil.com.br" target="blank">
                www.asnobrasil.com.br
              </a>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy text
                ever since the 1500s,
              </p>
            </ItemDescription>
          </Item>
        </div>
        <div>
          <Item>
            <ItemImage>
              <img src={slide} />
            </ItemImage>
            <ItemDescription>
              <Title>ASNO BRASIL</Title>
              <a href="https://asnobrasil.com.br" target="blank">
                www.asnobrasil.com.br
              </a>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy text
                ever since the 1500s,
              </p>
            </ItemDescription>
          </Item>
        </div>
      </Slider>
    </Container>
  )
}

export default Partners;
