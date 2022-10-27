import styled from "styled-components";
import { Button } from "./InfoCard";

const Container = styled.div`
  position: absolute;
  z-index: 1;
  bottom: 15px;
  left: 15px;
  right: 15px;
  display: flex;
  justify-content: flex-start;
  gap: 8px;
  background: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(6px);
  border-radius: 10px;
`;

const Title = styled.div`
  display: flex;
  padding: 5px;
  flex-grow: 1;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
`;

const ProductName = styled.div`
  font-size: 16px;
  line-height: 24px;
  font-weight: normal;
  letter-spacing: unset;
  color: #fff;
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const Price = styled(ProductName)`
  font-weight: 700;
`;
const SmallButton = styled(Button)`
  width: 66px;
  height: 28px;
  align-self: flex-end;
`;

type Props = {
  product: any;
};

export const PhoneInfoCard: React.FC<Props> = ({ product }) => {
  return (
    <Container>
      <img
        src={product.gallery[0].url}
        alt={product.gallery[0].id}
        width="72px"
        height="100px"
        style={{ borderRadius: "10px", flexGrow: 0 }}
      />
      <Title>
        <ProductName>{product.name}</ProductName>
        <Price>{product.price}</Price>
        <SmallButton>Shop</SmallButton>
      </Title>
    </Container>
  );
};
