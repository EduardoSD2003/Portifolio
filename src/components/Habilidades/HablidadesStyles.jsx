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
  position: absolute;
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
    align-items: center;
    padding: 10px 50px;
  }

  @media ${device.md} {
    margin-top: 10%;
    padding: 0;
  }

  p {
    font-size: 24px;
    color: white;

    @media ${device.sm} {
      width: 85vw;
      text-align: center;
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

  @media ${device.sm} {
    height: auto;
    width: 80vw;
  }
`;

export const HabilidadesConteudoUl = styled.ul`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  list-style: none;
  height: 200px; /* Set a fixed height for the component */
  overflow-y: auto; /* Add a scrollbar if necessary */
  justify-content: flex-start;
  padding: 30px;
  border-radius: 25% 43% 10% 25% / 0% 27% 0% 0%;
  background-color: #37373785;

  @media ${device.md} {
    border-radius: 10%;
    gap: 20px;
    width: 50vw;
  }

  @media ${device.sm} {
    overflow-y: hidden;
    width: 65vw;
    height: 165px;
    border-radius: 10%;
    gap: 20px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }
`;

export const HabilidadesConteudoImg = styled.img`
  height: 70px;
  z-index: 3;
  

  @media ${device.sm} {
    height: 40px;
  }

  &:hover {
    cursor: pointer;
    + span {
      transition-delay: 0.5s;
      opacity: 1;
      visibility: visible;
      margin-top: 5px;
    }
  }
`;

export const HabilidadesConteudoLi = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #d2cece;

  span {
    flex-wrap: wrap;
    opacity: 0;
    margin-top: -8px;
    font-size: 14px;
    transition: opacity 0.3s ease, margin-top 0.3s ease;

    @media ${device.sm} {
      font-size: 11px;
    }
  }
`;

export const SoftSkillsContainer = styled.div`


  h3 {
    @media ${device.sm} {
      font-size: 16px;
      width: 85vw;
      text-align: center;
    }
  }
  p {
    @media ${device.sm} {
      font-size: 12px;
      text-align: center;
    }
  }
`;

export const Rodape = styled.footer`
  width: 100vw;
  position: absolute;
  margin-top: 90vh;
  height: 10vh;
  display: flex;
  gap: 100px;
  justify-content: center;
  align-items: center;
  background-color: #0000007e;

  @media ${device.sm} {
    gap: 15px;
  }
`;

export const RodapeP = styled.p`
  font-size: 24px;
  font-weight: 300;
  color: #ffffffd0;

  @media ${device.sm} {
    text-align: center;
    font-size: 10px;
  }
`;

export const RodapeContatos = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 10%;
  align-items: center;

  @media ${device.sm} {
    width: 30%;
  }

  img {
    @media ${device.sm} {
      height: 3vh;
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
