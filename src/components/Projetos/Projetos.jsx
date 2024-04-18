import {
  BolaBranca,
  BolaRoxa,
  Linha,
  ProjetoImg,
  ProjetoImgContainer,
  ProjetoImgP,
  ProjetoSlideContainer,
  ProjetoSlideConteudo,
  ProjetoSlideConteudoDesc,
  ProjetoSlideConteudoH1,
  ProjetoSlideConteudoTecs,
  ProjetosContainer,
  ProjetosSlides,
  ProjetosStyledFundo,
  TituloProjetos,
  WhiteCubeSlides,
} from "./ProjetoStyled";
import Cabecalho from "../NavMenu/CabecalhoNav/Cabecalho";
import Slider from "./Slider/Slider";
import { SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import data from "../../projetos";
import whiteCube from "../../assets/white_cube2.png";
import bolaBranca from "../../assets/sphere_md.png";
import bolaRoxa from "../../assets/sphere_lg.png";
import { useMediaQuery } from 'react-responsive'



function Projetos() {
  const settings = {
    spaceBetween: 50,
    slidesPerView: 1,
    loop: true,
    effect: "coverflow",
    pagination: {
      clickable: true,
      dynamicBullets: true,
      dynamicMainBullets: 3,
    },
    autoplay: {
      delay: 10000,
      disableOnInteraction: false,
    },
  };
  const isMobile = useMediaQuery({ query: '(max-width: 1024px)' })

  return (


    <ProjetosStyledFundo>
      <ProjetosContainer id="Projetos">

      {isMobile ? <Cabecalho/> : <TituloProjetos>Projetos</TituloProjetos>}

        <BolaBranca src={bolaBranca} alt="" />
        <BolaRoxa src={bolaRoxa} alt="" />
        <ProjetosSlides>
          <WhiteCubeSlides src={whiteCube} alt="" />
          <Slider settings={settings}>
            {data.map((data) => {
              return (
                <SwiperSlide key={data.id}>
                  <ProjetoSlideContainer>
                    <ProjetoSlideConteudo>
                      <ProjetoSlideConteudoH1>
                        {data.titulo}
                      </ProjetoSlideConteudoH1>
                      <ProjetoSlideConteudoDesc>
                        {data.descricao}
                      </ProjetoSlideConteudoDesc>
                      <ProjetoSlideConteudoTecs>
                        Tecs: {data.tecs}
                      </ProjetoSlideConteudoTecs>
                    </ProjetoSlideConteudo>
                    <ProjetoImgContainer>
                      <ProjetoImg src={data.url} alt={`${data.url}`} />
                      <ProjetoImgP style={{ textAlign: "end" }}>
                        <a href={`${data.href}`}>Acesse o código</a>
                      </ProjetoImgP>
                    </ProjetoImgContainer>
                  </ProjetoSlideContainer>
                </SwiperSlide>
              );
            })}
          </Slider>
        </ProjetosSlides>
      </ProjetosContainer>
    </ProjetosStyledFundo>
  );
}

export default Projetos;
