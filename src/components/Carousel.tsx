import Slider from "react-slick";
import styled from "styled-components";

import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { NextArrow, PrevArrow } from "./ui/Arrows";

type Props = {
  images: Array<{
    id: string;
    url: string;
  }>;
};

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: <PrevArrow />,
  nextArrow: <NextArrow />,
};

const ImgContainer = styled.div`
  height: 220px;
  max-width: 170px;
  object-fit: cover;
  display: block;
  margin: auto;
`;

export const Carousel: React.FC<Props> = ({ images }) => {
  return (
    <Slider {...settings}>
      {images.map((img) => (
        <div key={img.id}>
          <ImgContainer>
            <img
              src={img.url}
              alt={img.id}
              width="170px"
              height="220px"
              style={{ borderRadius: "16px" }}
            />
          </ImgContainer>
        </div>
      ))}
    </Slider>
  );
};
