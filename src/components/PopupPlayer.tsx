import ReactPlayer from "react-player";
import styled, { css, keyframes } from "styled-components";
import { IconCross } from "./ui/IconCross";

type PopUpPlayerProps = {
  left?: boolean;
  right?: boolean;
};

const leftEntryAnimation = keyframes`
0% {
  transform: translateX(-100%);
}

100% {
  transform: translateX(0);
}
`;
const rightEntryAnimation = keyframes`
0% {
  transform: translateX(100%);
}

100% {
  transform: translateX(0);
}
`;

const PopUpPlayerStyled = styled.button<PopUpPlayerProps>`
  position: fixed;
  bottom: 30px;
  width: 150px;
  height: 200px;

  @media ${(props) => props.theme.media.phone} {
    height: 100px;
    width: 100px;
  }

  ${({ left, right }) => {
    switch (true) {
      case !!right:
        return css`
          right: 35px;
        `;
      case !!left:
        return css`
          left: 35px;
        `;
      default:
        return css`
          right: 35px;
        `;
    }
  }}

  animation: ${({ left }) =>
    left ? leftEntryAnimation : rightEntryAnimation} 1s;

  background: none;
  padding: 0;
  border: none;
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    transform: scale(1.03);
  }

  & video {
    object-fit: cover;
    object-position: center;
    border-radius: 15px;
    box-shadow: 0px 4px 20px rgb(0 0 0 / 15%);

    @media ${(props) => props.theme.media.phone} {
      border-radius: 50%;
    }
  }
`;

const Button = styled.a`
  display: block;
  position: absolute;
  z-index: 2;
  top: -8px;
  right: -8px;
  background: #ed5c4c;
  padding: 0;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  width: 22px;
  height: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  line-height: 22px;
  box-shadow: 0px 2px 4px rgb(0 0 0 / 20%);

  transition: 0.7s;
  transition-delay: -0.1s;

  @media ${(props) => props.theme.media.phone} {
    top: 1px;
    right: 1px;
  }

  & > * {
    display: none;
  }

  &:after {
    content: "1";
    color: #fff;
    font-weight: 500;
  }

  &:hover {
    background: #2f3137;
    transform: rotate(180deg);

    transition: 0.7s;

    & > * {
      display: inline-block;
    }

    &:after {
      content: "";
    }
  }
`;

type Props = {
  url: string;
  left?: boolean;
  right?: boolean;
  onOpenModal: () => void;
  onClosePopUp: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
};

export const PopUpPlayer: React.FC<Props> = ({
  url,
  onOpenModal,
  onClosePopUp,
  ...props
}) => {
  return (
    <PopUpPlayerStyled {...props} onClick={onOpenModal}>
      <Button onClick={onClosePopUp}>
        <IconCross />
      </Button>
      <ReactPlayer url={url} playing loop muted width="100%" height="100%" />
    </PopUpPlayerStyled>
  );
};
