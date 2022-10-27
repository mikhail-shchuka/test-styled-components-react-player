import ReactPlayer from "react-player";
import styled, { keyframes } from "styled-components";
import { useMediaQuery } from 'react-responsive'

import { IconCross } from "./IconCross";
import { InfoCard } from "./InfoCard";
import { PhoneInfoCard } from "./PhoneInfoCard";

type ModalProps = {
  left?: boolean;
  right?: boolean;
};

const entryAnimation = keyframes`
0% {
  transform: scale(0.1);
  opacity: 0;
}

100% {
  transform: scale(1);
  opacity: 1;
}
`;

const ModalStyled = styled.div<ModalProps>`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  background: #fff;
  transform-origin: ${(props) =>
    (props.left && "left bottom") || "right bottom"};

  animation: ${entryAnimation} 0.3s;

`;

const Player = styled.div`
  background: #000;
  height: 100%;
  display: inline-block;

  @media ${(props) => props.theme.media.phone} {
    width: 100%;
  }
  @media ${(props) => props.theme.media.tablet} {
    width: 60%;
  }
  @media ${(props) => props.theme.media.desktop} {
    width: 75%;
  }
`;

const ButtonClose = styled.button`
  background: #fff;
  padding: 5px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  cursor: pointer;
  position: absolute;
  top: 8px;
  right: 8px;
  width: 30px;
  height: 30px;

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    & > svg {
      transform: scale(1.2);
    }
  }
`;

type Props = {
  onCloseModal: () => void;
  left?: boolean;
  right?: boolean;
  product: any;
};


export const Modal: React.FC<Props> = ({ onCloseModal, product, ...props }) => {

  const isPhone = useMediaQuery({
    query: '(max-width: 600px)'
  })


  return (
    <ModalStyled {...props}>
      <Player>
        {isPhone && <PhoneInfoCard product={product}/>}
        <ReactPlayer
          url={product.video.url}
          playing
          controls={!isPhone}
          loop
          volume={0.75}
          width="100%"
          height="100%"
        />
      </Player>
      <InfoCard product={product} />
      <ButtonClose onClick={onCloseModal}>
        <IconCross width="20px" height="20px" color="#000" />
      </ButtonClose>
    </ModalStyled>
  );
};
