import styled from "styled-components";
import projetosBackground from "../../assets/projetosBackground.png";
import { device } from "../Styles/media";

export const TituloProjetos = styled.h1`
  width: 100vw;
  padding-top: 100px;
  text-align: center;
  font-size: 40px;
  color: aliceblue;

  @media ${device.lg} {
    padding-top: 60px;
  }
`;

export const ProjetosStyledFundo = styled.div`
  height: 101vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #5b16e4;
  z-index: 1;
`;

export const ProjetosContainer = styled.section`
  height: 100vh;
  width: 100vw;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url(${projetosBackground});
`;

export const ProjetosSlides = styled.div`
  margin: 10vh auto;
  width: 60vw;
  height: 60vh;

  @media ${device.sm} {
    background-color: #00000018;
    width: 80vw;
    height: 70vh;
    margin: 5vh auto;
    border-radius: 10px;
  }

  @media ${device.md} {
    padding: 10px 20px;
    width: 90vw;
  }
`;

export const ProjetoSlideContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  @media ${device.sm} {
    flex-direction: column;
    justify-content: space-around;
  }
`;

export const ProjetoSlideConteudo = styled.div`
  width: 50%;
  height: 70%;
  display: flex;
  padding: 10px;
  flex-direction: column;

  @media ${device.sm} {
    padding: 0;
    padding: 0;
    align-items: center;
    justify-content: center;
  }
`;

export const ProjetoSlideConteudoH1 = styled.h1`
  font-size: 40px;
  font-weight: bold;
  text-transform: uppercase;
  color: #ffffff;

  @media ${device.sm} {
    font-size: 24px;
    text-align: center;
  }

  @media ${device.md} {
    font-size: 24px;
  }

  @media ${device.lg} {
    font-size: 32px;
  }
`;

export const ProjetoSlideConteudoDesc = styled.p`
  font-size: 32px;
  color: #ffffff;
  font-weight: 500;

  @media ${device.sm} {
    height: 20%;
    width: 65vw;
    font-size: 12px;
    text-align: center;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  @media ${device.md} {
    font-size: 24px;
  }

  @media ${device.lg} {
    font-size: 24px;
  }
`;

export const ProjetoSlideConteudoTecs = styled.p`
  font-size: 24px;
  text-decoration: underline;
  font-weight: 100;
  color: #ffffff;

  @media ${device.sm} {
    font-size: 12px;
    text-overflow: ellipsis; /* enables ellipsis */
    white-space: nowrap; /* keeps the text in a single line */
  }

  @media ${device.lg} {
    font-size: 12px;
  }
`;

export const ProjetoImgContainer = styled.div``;

export const ProjetoImg = styled.img`
  max-height: 500px;
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    scale: calc(1.1);
  }

  @media ${device.sm} {
    height: 200px;
  }

  @media ${device.md} {
    max-height: 400px;
  }

  @media ${device.lg} {
    max-height: 400px;
  }
`;

export const ProjetoImgP = styled.p`
  text-align: end;
  cursor: pointer;
  width: 100%;
  font-size: 16px;
  display: flex;
  justify-content: space-evenly;

  @media ${device.sm} {
  }

  a {
    padding-bottom: 15px;
    color: aquamarine;
  }
`;

export const WhiteCubeSlides = styled.img`
  position: absolute;
  margin: 50px 50%;
  z-index: 2;
  height: 80px;
  box-sizing: border-box;

  @media ${device.sm} {
    display: none;
  }
`;

export const BolaBranca = styled.img`
  position: absolute;
  margin: 5% 30%;

  @media ${device.sm} {
  }
`;
export const BolaRoxa = styled.img`
  position: absolute;
  margin: 30% 15%;

  @media ${device.sm} {
  }
`;

export const Linha = styled.span`
  position: absolute;
  width: 100vw;
  height: 5px;
  background-color: #5b16e4;
`;
