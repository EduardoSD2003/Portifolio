import styled from "styled-components";
import backgroundHabilidades from "../../assets/backgroundHabilidades.png";
import { device } from "../Styles/media";

export const TituloHabilidades = styled.h1`
  font-size: 40px;
  color: white;
  text-align: center;
  padding-bottom: 50px;
`;

export const HabilidadesContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url("${backgroundHabilidades}");

  @media ${device.sm} {
    justify-content: start;
    align-items: start;
  }
`;

export const HabilidadesConteudo = styled.div`
  display: flex;
  padding: 50px;
  justify-content: center;
  flex-direction: column;
  box-sizing: border-box;

  @media ${device.sm} {
    width: 100vw;
  }

  @media ${device.md} {
    margin-bottom: 100px;
  }

  p {
    font-size: 24px;
    color: white;

    @media ${device.sm} {
      width: 85vw;
    }
  }

  h3 {
    font-size: 32px;
    font-weight: bold;
    color: white;
  }
`;

export const HabilidadesConteudoUlContainer = styled.div`
  height: auto;
  max-height: 272px;
  width: 65%;
  min-width: 240px;
`;

export const HabilidadesConteudoUl = styled.ul`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  list-style: none;
  max-height: 272px;
  justify-content: space-evenly;
  padding: 25px;
  border-radius: 25% 43% 10% 25% / 0% 27% 0% 0%;
  background-color: #37373785;

  @media ${device.md} {
    width: 45vw;
  }
`;

export const HabilidadesConteudoLi = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #d2cece;
`;

export const HabilidadesConteudoImg = styled.img`
  height: 70px;
  transition: 0.5s;

  @media ${device.sm} {
    height: 40px;
  }

  &:hover {
    cursor: pointer;
    transform: translateY(-20px);
  }
`;

export const SoftSkillsContainer = styled.div`
  h3 {
    @media ${device.sm} {
      font-size: 24px;
      margin-top: 65px;
      width: 85vw;
    }
    @media ${device.md} {
      margin-top: 65px;
    }
  }
  p {
    @media ${device.sm} {
      font-size: 16px;
    }
  }
`;

export const Rodape = styled.footer`
  position: absolute;
  width: 100vw;
  margin-top: 90vh;
  height: 10vh;
  display: flex;
  gap: 100px;
  justify-content: center;
  align-items: center;
  background-color: #0000007e;

  @media ${device.sm} {
    gap: 50px;
  }
`;

export const RodapeP = styled.p`
  font-size: 24px;
  font-weight: 300;
  color: #ffffffd0;

  @media ${device.sm} {
    font-size: 14px;
  }
`;

export const RodapeContatos = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 10%;
  align-items: center;

  img {
    @media screen {
      height: 25px;
    }
  }
`;

export const DarkCube = styled.img`
  position: absolute;
  height: 150px;
  margin-left: 55%;
  margin-bottom: 25%;

  @media ${device.sm} {
    display: none;
  }
`;
