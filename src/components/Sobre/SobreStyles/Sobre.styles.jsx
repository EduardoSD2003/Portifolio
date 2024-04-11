import styled, { keyframes } from "styled-components";
import sobreBackground from "../../../assets/sobreBackground.png";
import { device } from "../../Styles/media";

const setaAnimacao = keyframes`
    from {
      margin-top: 70vh;
    }
    to {
      margin-top: 75vh;
      opacity: 0;

    }
`;

export const TituloSobreMim = styled.h1`
  font-size: 40px;
  padding-top: 100px;
  color: white;
  text-align: center;
  width: 100vw;
`;

export const SobreStyled = styled.div`
  height: 105vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #5b16e4;
  z-index: 1;

  @media ${device.sm} {
  }
`;

export const BackgroundImage = styled.div`
  width: 100%;
  height: 104vh;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url(${sobreBackground});
`;

export const SobreConteudo = styled.div`
  position: absolute;
  margin: 125px 20%;
  padding: 16px;
  width: 60vw;
  display: flex;
  justify-content: center;

  @media ${device.sm} {
    margin: 0px;
    display: flex;
    flex-wrap: wrap;
    width: 90vw;
    height: 50vh;
  }

  @media ${device.md} {
    width: 90vw;
    margin: 0px 50px;
  }

  @media ${device.lg} {
    margin: 0 20%;
  }
`;

export const SobreConteudoApresentacaoH2 = styled.h2`
  max-width: 80%;
  font-size: 3em;
  color: white;

  @media ${device.sm} {
    font-size: 1.5em;
    text-align: center;
  }
`;

export const SobreConteudoTextos = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SobreConteudoTextosP = styled.p`
  text-align: end;
  display: flex;
  font-size: 24px;
  color: white;
  padding: 20px;

  @media ${device.sm} {
    font-size: 18px;
    text-align: justify;
    width: 100%;
    padding: 0;
  }
`;

export const SobreConteudoApresentacao = styled.div`
  display: flex;
  text-align: left;
  flex-direction: column;
  justify-content: space-between;
  height: auto;

  @media ${device.sm} {
    width: 100%;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const SobreConteudoApresentacaoP = styled.p`
  font-size: 24px;
  color: white;
`;

export const WhiteCube = styled.img`
  margin-top: 10vh;
  margin-left: 40vw;
  position: absolute;
  transform: rotate(40deg);
  aspect-ratio: 16 / 9;
  width: 200px;

  @media ${device.sm} {
    display: none;
  }

  @media ${device.md} {
    display: none;
  }
`;

export const SetaPBaixo = styled.img`
  position: absolute;
  transform: translateX(-50%);
  margin: 35% 50vw;
  width: 70px;
  animation: ${setaAnimacao} 3s infinite;
`;
