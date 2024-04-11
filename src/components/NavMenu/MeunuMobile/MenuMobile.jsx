import { useEffect } from "react";
import { MenuContainer } from "./MenuStyles";
import { MdClose } from "react-icons/md";

export function MenuMobile({ menuIsVisible, setMenuIsVisible }) {
  useEffect(() => {
    document.body.style.overflowY = menuIsVisible ? "hidden" : "auto";
  }, [menuIsVisible]);

  return (
    <MenuContainer isVisible={menuIsVisible}>
      <MdClose size={45} color="white" onClick={() => setMenuIsVisible(false)} />
      <nav>
        <a href="#inicio" onClick={() => setMenuIsVisible(false)}>
          Inicio
        </a>
        <a href="#Sobre" onClick={() => setMenuIsVisible(false)}>
          Sobre
        </a>
        <a href="#Projetos" onClick={() => setMenuIsVisible(false)}>
          Projetos
        </a>
        <a href="#Habilidades" onClick={() => setMenuIsVisible(false)}>
          Habilidades
        </a>
      </nav>
    </MenuContainer>
  );
}
