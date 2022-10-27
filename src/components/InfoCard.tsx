import styled, { css } from "styled-components";
import { Carousel } from "./Carousel";

import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { CustomSelect } from "./CustomSelect";

const InfoCardStyled = styled.div`
  height: 100%;
  max-height: 100vh;
  display: inline-block;
  overflow: hidden auto;
  padding: 24px 32px;
  box-sizing: border-box;

  @media ${(props) => props.theme.media.phone} {
  }
  @media ${(props) => props.theme.media.tablet} {
    width: 40%;
  }
  @media ${(props) => props.theme.media.desktop} {
    width: 25%;
  }

  color: #000;
`;

const Container = styled.div`
  min-height: 100%;
  display: flex;
  gap: 40px;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
`;

const Title = styled.div`
  font-size: 18px;
  line-height: 26px;
  font-weight: 700;
  letter-spacing: 0.0015em;
  overflow-wrap: break-word;
  user-select: none;
  text-align: center;
  padding-bottom: 8px;
`;

const Price = styled.div`
  font-size: 32px;
  line-height: 40px;
  letter-spacing: 0.0025em;
  font-weight: 700;
  overflow-wrap: break-word;
  user-select: none;
`;

const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding-bottom: 15px;
  font-weight: 600;
`;

export const Button = styled.button<{ white?: boolean }>`
  background: rgb(9, 10, 11);
  border-radius: 10px;
  border: 1px solid transparent;
  width: 100%;
  height: 50px;
  color: #fff;
  margin-bottom: 10px;
  cursor: pointer;
  font-weight: 700;
  line-height: 16px;
  font-size: 16px;

  ${(props) =>
    props.white &&
    css`
      background: none;
      border-color: rgb(9, 10, 11);
      color: rgb(9, 10, 11);
    `}
`;

type Props = {
  product: any;
};

export const InfoCard: React.FC<Props> = ({ product }) => {
  return (
    <InfoCardStyled>
      <Container>
        <Carousel images={product.gallery} />
        <div>
          <Title>{product.name}</Title>
          <Price>{product.price}</Price>
        </div>
        <div>
          <SelectContainer>
            <span>Color</span>
            <CustomSelect options={product.availableColors} />
          </SelectContainer>
          <SelectContainer>
            <span>Size</span>
            <CustomSelect options={product.availableSizes} />
          </SelectContainer>
          <Button>Add to cart</Button>
          <Button white>Product details</Button>
        </div>
      </Container>
    </InfoCardStyled>
  );
};
