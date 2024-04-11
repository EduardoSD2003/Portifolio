import {
  DarkCube,
  HabilidadesContainer,
  HabilidadesConteudo,
  HabilidadesConteudoImg,
  HabilidadesConteudoLi,
  HabilidadesConteudoLiContainer,
  HabilidadesConteudoUl,
  HabilidadesConteudoUlContainer,
  Rodape,
  RodapeContatos,
  RodapeP,
  SoftSkillsContainer,
  TituloHabilidades,
} from "./HablidadesStyles";
import bootstrapIcon from "../../assets/icons/iconBootstrap.png";
import CSSIcon from "../../assets/icons/iconCSS.png";
import HTMLIcon from "../../assets/icons/iconHTML.png";
import JSIcon from "../../assets/icons/iconJS.png";
import ReactIcon from "../../assets/icons/iconReact.png";
import SCIcon from "../../assets/icons/iconSC.png";
import TSIcon from "../../assets/icons/iconTS.png";
import TailIcon from "../../assets/icons/iconTail.png";
import WhatsApp from "../../assets/icons/WhatsApp.png";
import Gmail from "../../assets/icons/Gmail.png";
import Linkedin from "../../assets/icons/Linkedin.png";
import darkcube from "../../assets/dark_cube1.png";
import Cabecalho from "../NavMenu/CabecalhoNav/Cabecalho";
import { useMediaQuery } from "react-responsive";

function Habilidades() {
  const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });
  return (
    <HabilidadesContainer id="Habilidades">
      <DarkCube src={darkcube} alt="" />
      {isMobile ? (
        <Cabecalho />
      ) : (
        <TituloHabilidades>Habilidades</TituloHabilidades>
      )}
      <HabilidadesConteudo>
        <p>Estudo e utilizo as seguintes tecnologias:</p>
        <HabilidadesConteudoUlContainer>
          <HabilidadesConteudoUl>
            <HabilidadesConteudoLi>
              <HabilidadesConteudoImg
                src={bootstrapIcon}
                alt=""
                title="Bootstrap"
              />
              Bootstrap
            </HabilidadesConteudoLi>
            <HabilidadesConteudoLi>
              <HabilidadesConteudoImg src={CSSIcon} alt="" title="CSS" /> Css
            </HabilidadesConteudoLi>
            <HabilidadesConteudoLi>
              <HabilidadesConteudoImg src={HTMLIcon} alt="" title="HTML" /> HTML
            </HabilidadesConteudoLi>
            <HabilidadesConteudoLi>
              <HabilidadesConteudoImg src={JSIcon} alt="" title="JavaScript" />{" "}
              JavaScript
            </HabilidadesConteudoLi>
            <HabilidadesConteudoLi>
              <HabilidadesConteudoImg src={ReactIcon} alt="" title="React" />{" "}
              React
            </HabilidadesConteudoLi>
            <HabilidadesConteudoLi>
              <HabilidadesConteudoImg
                src={SCIcon}
                alt=""
                title="Styled Components"
              />
              Styled Components
            </HabilidadesConteudoLi>
            <HabilidadesConteudoLi>
              <HabilidadesConteudoImg src={TSIcon} alt="" title="TypeScript" />
              TypeScript
            </HabilidadesConteudoLi>
            <HabilidadesConteudoLi>
              <HabilidadesConteudoImg src={TailIcon} alt="" title="Tailwind" />
              Tailwind
            </HabilidadesConteudoLi>
          </HabilidadesConteudoUl>
        </HabilidadesConteudoUlContainer>
        <SoftSkillsContainer>
          <h3>Soft Skills:</h3>
          <p>Diciplinado, Engajado, Proativo Focado, Calmo</p>
        </SoftSkillsContainer>
      </HabilidadesConteudo>

      <Rodape>
        <RodapeP>
          Vamos conversar e desenvolver juntos? <br />
          Mande uma mensagem!
        </RodapeP>
        <RodapeContatos>
          <a href="https://wa.me/556195854320">
            <img src={Linkedin} alt="" />
          </a>

          <a
            href="mailto:
          es455555@gmail.com.com"
          >
            <img src={Gmail} alt="" />
          </a>

          <a href="http://www.linkedin.com/in/eduardo-santos-096884218">
            <img src={WhatsApp} alt="" />
          </a>
        </RodapeContatos>
      </Rodape>
    </HabilidadesContainer>
  );
}

export default Habilidades;
