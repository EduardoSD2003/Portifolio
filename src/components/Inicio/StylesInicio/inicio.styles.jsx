import styled, { keyframes } from "styled-components";
import { SlArrowRight } from "react-icons/sl";
import { device } from "../../Styles/media";

const moveRightFadeOut = keyframes`
  0% {
    transform: translateX(0);
    opacity: 1;
  }
  100% {
    transform: translateX(25px);
    opacity: 0;
  }
`;
const rotationAnimation = keyframes`
  0% {
    -webkit-transform: rotateY(0);
            transform: rotateY(0);
  }
  100% {
    -webkit-transform: rotateY(360deg);
            transform: rotateY(360deg);
  }
`;
const rotationAnimationSecond = keyframes`
  0% {
    -webkit-transform: rotate(0);
            transform: rotate(0);
  }
  100% {
    -webkit-transform: rotate(-360deg);
            transform: rotate(-360deg);
  }
`;

export const InicioContainer = styled.div`
  background-color: #5d30d9;

  @media ${device.sm} {
    height: 100vh;
    margin-bottom: 10px;
  }
`;

export const ImagemContainer = styled.img`
  background-size: cover;
  width: 100vw;
  max-height: 100vh;
  height: calc(100vh - 95px);
  position: relative;
`;

export const MainContainer = styled.div`
  position: absolute;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100vw;
  padding: 50px 260px;
  box-sizing: border-box;
  z-index: 1;

  @media ${device.sm} {
    padding: 0;
  }

  @media ${device.md} {
    height: 100vh;
    padding: 100px 10px;
  }

  @media ${device.lg} {
    display: flex;
    width: 100vw;
    height: 90vh;
    align-items: center;
  }
`;

export const TextosContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;

  @media ${device.sm} {
    width: 100%;
    height: 100vh;
    align-items: center;
    text-align: center;
    padding-top: 50px;
  }

  @media ${device.md} {
    width: 100vw;
    align-items: center;
  }
`;

export const TextosDescricao = styled.p`
  font-size: clamp(6px, 6vw, 24px);
  color: whitesmoke;
  margin-bottom: 60px;
  width: 80%;

  @media ${device.md} {
    text-align: center;
    /* font-size: 32px; */
  }
`;

export const TecsStyled = styled.div`
  margin-top: 40px;
  width: auto;
  max-width: 20vw;
  flex-wrap: nowrap;
  align-items: center;
  display: flex;
  height: auto;
  padding: 15px;
  background-color: #7a777779;
  border-radius: 30% 28% 25% 25% / 0% 36% 48% 0%;

  @media ${device.sm} {
    width: auto;
  max-width: 75vw;
  }

  @media ${device.md} {
    width: auto;
  max-width: 35vw;
    margin-top: 40px;
  }

  @media ${device.lg} {
    display: none;
  }
`;

export const TecsUL = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  box-sizing: border-box;
  gap: 16px;

  @media ${device.sm} {
    padding-left: 10px;
    justify-content: flex-start;
  }
`;

export const TecsImg = styled.img`
  width: 50%;
  height: 100%;

  @media ${device.sm} {
    width: 40%;
  }
`;

export const TextoH1 = styled.h1`
  width: 50%;
  font-size: clamp(32px, 40px, 4vw);
  color: aliceblue;

  @media ${device.sm} {
    width: 100%;
    text-align: center;
  }

  @media ${device.md} {
    text-align: center;
  }
`;

export const ButtonStyled = styled.a`
  width: 200px;
  height: 40px;
  display: flex;
  gap: 30px;
  font-size: 16px;
  align-items: center;
  justify-content: center;
  background-color: #623cea;
  color: whitesmoke;
  border: none;
  cursor: pointer;
  transition: ease-in-out 0.3s;

  &:hover {
    transform: scale(1.1);
  }

  @media ${device.md} {
    width: 200px;
    height: 60px;
    font-size: 16px;
  }
`;

export const IconeAnimado = styled(SlArrowRight)`
  animation: ${moveRightFadeOut} 1.5s linear infinite;
`;

export const ImgComputador = styled.img`
  width: 50%;
  max-width: 700px;

  @media ${device.sm} {
    display: none;
  }

  @media ${device.md} {
    display: none;
  }
`;

export const PrismaRoxo = styled.img`
  margin-left: 80vw;
  z-index: 10;
  position: absolute;
  height: 250px;
  width: 150px;
  animation: ${rotationAnimation} 2s linear infinite;

  @media ${device.sm} {
    display: none;
  }

  @media ${device.md} {
  }
`;

export const PrismaPreto = styled.img`
  margin-left: 80vw;
  margin-top: 65vh;
  z-index: 10;
  position: absolute;
  height: 150px;
  width: 150px;
  animation: ${rotationAnimationSecond} 5s linear infinite;

  @media ${device.sm} {
    display: none;
  }

  @media ${device.md} {
    display: none;
  }
`;
