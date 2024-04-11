import {
  ButtonStyled,
  IconeAnimado,
  ImagemContainer,
  ImgComputador,
  InicioContainer,
  MainContainer,
  PrismaPreto,
  PrismaRoxo,
  TecsImg,
  TecsStyled,
  TecsUL,
  TextoH1,
  TextosContainer,
  TextosDescricao,
} from "./StylesInicio/inicio.styles";
import {
  HeaderContainer,
  LiStyled,
  NavContainer,
  NavMobile,
  SpanLogo,
  UlStyled,
} from "./StylesInicio/header.styles";
import inicioBackgroud from "../../assets/Rectangle1.jpg";
import inicioComputador from "../../assets/imagem computador home.png";
import prismaRoxo from "../../assets/purple_romb1.png";
import prismaPreto from "../../assets/dark_romb.png";
import iHTML from "../../assets/icons/iconHTML.png";
import iCSS from "../../assets/icons/iconCSS.png";
import iJS from "../../assets/icons/iconJS.png";
import iReact from "../../assets/icons/iconReact.png";
import iBootstrap from "../../assets/icons/iconBootstrap.png";
import iStyledComponents from "../../assets/icons/iconSC.png";
import { Link } from "react-scroll";
import { MenuMobile } from "../NavMenu/MeunuMobile/MenuMobile";
import { useState } from "react";
import { CgMenuRight } from "react-icons/cg";
import { useMediaQuery } from 'react-responsive'

function Inicio() {
  const [menuIsVisible, setMenuIsVisible] = useState(false)


  return (

    <>
      <MenuMobile
        menuIsVisible={menuIsVisible}
        setMenuIsVisible={setMenuIsVisible}
      />
      <InicioContainer id="inicio">
        <HeaderContainer>
          <NavContainer>
            <NavMobile>
              <span>Eduardo Santos</span>
              <CgMenuRight onClick={() => setMenuIsVisible(true)}/>
            </NavMobile>
            <SpanLogo>Eduardo Santos</SpanLogo>
            <UlStyled>
              <LiStyled>Inicio</LiStyled>
              <LiStyled>
                <Link
                  to="Sobre"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                >
                  Sobre
                </Link>
              </LiStyled>
              <LiStyled>
                <Link
                  to="Projetos"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={800}
                >
                  Projetos
                </Link>
              </LiStyled>
              <LiStyled>
                <Link
                  to="Habilidades"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={1200}
                >
                  Habilidades
                </Link>
              </LiStyled>
            </UlStyled>
          </NavContainer>
        </HeaderContainer>
        <MainContainer>
          <TextosContainer>
            <TextoH1>Desenvolvedor Front-End</TextoH1>
            <TextosDescricao>
              Olá, sou o Eduardo Santos e tenho 20 anos. Estou sempre buscando
              aprender algo novo, principalmente na área da tecnologia. Costumo
              aprender sozinho e atualmente estou focado no Front-End
            </TextosDescricao>

            <ButtonStyled href="https://wa.me/556195854320">
              Entre em contato <IconeAnimado />
            </ButtonStyled>

            <TecsStyled>
              <TecsUL>
                <span>
                  <TecsImg src={iHTML} alt="" title="HTML" />
                </span>
                <span>
                  <TecsImg src={iCSS} alt="" title="CSS" />
                </span>
                <span>
                  <TecsImg src={iJS} alt="" title="JavaScript" />
                </span>
                <span>
                  <TecsImg src={iReact} alt="" title="React" />
                </span>
                <span>
                  <TecsImg src={iBootstrap} alt="" title="BootStrap" />
                </span>
                <span>
                  <TecsImg
                    src={iStyledComponents}
                    alt=""
                    title="Styled Components"
                  />
                </span>
              </TecsUL>
            </TecsStyled>
          </TextosContainer>

          <ImgComputador src={inicioComputador} alt="Imagem de um computador" />
        </MainContainer>

        <PrismaRoxo src={prismaRoxo} alt="" />
        <PrismaPreto src={prismaPreto} alt="" />
        <ImagemContainer
          src={inicioBackgroud}
          alt="background cinza com quadrados"
        />
      </InicioContainer>
    </>
  );
}
export default Inicio;
