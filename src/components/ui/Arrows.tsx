import styled from "styled-components";
import { IconArrow } from "./IconArrow";

const PrevArrowStyled = styled.div`
  z-index: 1;
  padding: 8px 4px;
  &:hover {
    background: rgba(0, 0, 0, 0.05);
    border-radius: 4px;
  }
  &:before {
    display: none;
  }
`;
const NextArrowStyled = styled(PrevArrowStyled)`
  transform: rotate(180deg) translate(0, 50%);
`;

export function PrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <PrevArrowStyled
      className={className}
      style={{
        ...style,
        display: "block",
        left: "10px",
        height: "25px",
        width: "25px",
      }}
      onClick={onClick}
    >
      <IconArrow width="25px" height="25px" />
    </PrevArrowStyled>
  );
}

export function NextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <NextArrowStyled
      className={className}
      style={{
        ...style,
        display: "block",
        right: "10px",
        height: "25px",
        width: "25px",
      }}
      onClick={onClick}
    >
      <IconArrow width="25px" height="25px" />
    </NextArrowStyled>
  );
}
