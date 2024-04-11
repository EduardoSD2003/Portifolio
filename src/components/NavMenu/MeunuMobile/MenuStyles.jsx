import { css } from "styled-components";
import styled from "styled-components";

export const MenuContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(3px);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(57, 62, 70);
  background: radial-gradient(
    circle,
    rgba(57, 62, 70, 0.5032387955182073) 42%,
    rgba(43, 47, 54, 0.5144432773109244) 100%
  );

  opacity: ${({ isVisible }) => isVisible ? 1 : 0};
  pointer-events: none;
  transition: 0.5s;

  > svg {
    position: absolute;
    top: 1rem;
    right: 1rem;
  }

  > nav {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
    height: 60%;
    justify-content: space-evenly;
    align-items: center;

    > a {
      color: white;
      font-size: 24px;
    }
  }

  ${({ isVisible }) =>
    isVisible &&
    css`
      pointer-events: auto;
    `};
`;
