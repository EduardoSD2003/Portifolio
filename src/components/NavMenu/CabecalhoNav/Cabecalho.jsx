import linkedin from "../../../assets/linkedinIcon.png";
import github from "../../../assets/githubIcon.png";
import {
  ImgIcons,
  SobreHeader,
  SobreHeaderContainer,
} from "../CabecalhoNav/CabecalhoStyles";
import { MenuMobile } from "../MeunuMobile/MenuMobile";
import { useState } from "react";
import { MdClose } from "react-icons/md";
import { CgMenuRight } from "react-icons/cg";

function Cabecalho() {
  const [menuIsVisible, setMenuIsVisible] = useState(false);

  return (
    <SobreHeaderContainer>
      <MenuMobile
        menuIsVisible={menuIsVisible}
        setMenuIsVisible={setMenuIsVisible}
      />
      <SobreHeader>
        <nav>
          <span>E.S</span>
          <CgMenuRight onClick={() => setMenuIsVisible(true)} />
        </nav>
      </SobreHeader>
    </SobreHeaderContainer>
  );
}

export default Cabecalho;
