import {
  BackgroundImage,
  ImgIcons,
  SetaPBaixo,
  SobreConteudo,
  SobreConteudoApresentacao,
  SobreConteudoApresentacaoH2,
  SobreConteudoApresentacaoP,
  SobreConteudoTextos,
  SobreConteudoTextosP,
  SobreHeader,
  SobreHeaderContainer,
  SobreStyled,
  TituloSobreMim,
  WhiteCube,
} from "../Sobre/SobreStyles/Sobre.styles";

import whiteCube from "../../assets/white_cube2.png";
import setaPBaixo from "../../assets/setaParaBaixo.png";
import Cabecalho from "../NavMenu/CabecalhoNav/Cabecalho";
import { useMediaQuery } from 'react-responsive'



function Sobre() {

  const isMobile = useMediaQuery({ query: '(max-width: 1024px)' })


  return (
    <SobreStyled id="Sobre">
      <BackgroundImage>
      {isMobile ? <Cabecalho/> : <TituloSobreMim>Sobre Mim</TituloSobreMim>}

        <SobreConteudo>
            <SobreConteudoApresentacao>
              <SobreConteudoApresentacaoH2>
                Olá, sou o Eduardo Desenvolvedor Front-End
              </SobreConteudoApresentacaoH2>
              <SobreConteudoApresentacaoP>Proatividade /Diciplina / Foco</SobreConteudoApresentacaoP>
            </SobreConteudoApresentacao>

            <SobreConteudoTextos>
              <SobreConteudoTextosP>
                Gosto de está sempre aprendendo e aprimorando minhas
                habilidades, atualmente estou estudando front-end.
              </SobreConteudoTextosP>
              <SobreConteudoTextosP>
                Costumo aprender sozinho, entretanto estou sempre disposto a
                aprender com quem sabe mais.
              </SobreConteudoTextosP>
              <SobreConteudoTextosP>
                Sou muito diciplinado, gosto de ter uma rotina e tenho o hábito
                de ler, principalmente livros não-ficticios
              </SobreConteudoTextosP>
            </SobreConteudoTextos>
        </SobreConteudo>

        <WhiteCube src={whiteCube} alt="" />
        <SetaPBaixo src={setaPBaixo} alt="" />
      </BackgroundImage>
    </SobreStyled>
  );
}

export default Sobre;
