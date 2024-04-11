import styled, { keyframes } from "styled-components";
import { device } from "../../Styles/media";


const borderAnimation = keyframes`
to {
    --border-angle: 1turn;
  }
`;

export const ImgIcons = styled.img `
  height: 40px;
`

export const SobreHeaderContainer = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: ${props => props.habilidades ? '0px' : '100px'};

  @media ${device.sm} {
    padding-top: 100px;
  }
`;

export const SobreHeader = styled.header`
  display: flex;
  width: 80%;
  height: 70px;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: bold;
  font-size: larger;
  overflow: hidden;

  --border-angle: 0turn; // For animation.
  --main-bg: conic-gradient(
    from var(--border-angle),
    #213,
    #112 5%,
    #112 60%,
    #213 95%
  );
  border: solid 5px transparent;
  border-radius: 2em;
  --gradient-border: conic-gradient(
    from var(--border-angle),
    transparent 25%,
    #08f,
    #f03 99%,
    transparent
  );
  background: 
    // padding-box clip this background in to the overall element except the border.
    var(--main-bg) padding-box,
    // border-box extends this background to the border space
    var(--gradient-border) border-box,
    // Duplicate main background to fill in behind the gradient border. You can remove this if you want the border to extend "outside" the box background.
    var(--main-bg) border-box;
  background-position: center center;
  animation: ${borderAnimation} 3s linear infinite forwards;

  @property --border-angle {
    syntax: "<angle>";
    inherits: true;
    initial-value: 0turn;
  }

  nav {
    padding: 16px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    ul {
      display: flex;
      justify-content: space-evenly;
      background-color: purple;
      border-radius: 10px;
      width: 20%;
      overflow: hidden;
    }
  }
`;