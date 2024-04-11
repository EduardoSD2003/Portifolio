import { useState, useLayoutEffect } from "react";
import { NavContainer, NavLI, NavUL } from "./NavBarStyles";
import { Link } from "react-scroll";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Navegacao() {
  const [activeLink, setActiveLink] = useState(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to("#Sobre", {
      scrollTrigger: {
        trigger: "#Sobre",
        start: "top center",
        end: "bottom center",
        scrub: true,
        onEnter: () => {
          gsap.to("#navSobre::after", { height: "100%", duration: 0.3 });
          setActiveLink("navSobre");
        },
        onLeave: () => {
          gsap.to("#navSobre::after", { height: "0%", duration: 0.3 });
          setActiveLink(null);
        },
        onEnterBack: () => {
          gsap.to("#navSobre::after", {
            height: "100%",
            duration: 0.3,
          });
          setActiveLink("navSobre");
        },
        onLeaveBack: () => {
          gsap.to("#navSobre::after", { height: "0%", duration: 0.3 });
          setActiveLink(null);
        },
      },
    });

    gsap.to("#Projetos", {
      scrollTrigger: {
        trigger: "#Projetos",
        start: "top center",
        end: "bottom center",
        scrub: true,
        onEnter: () => {
          gsap.to("#navProjetos::after", { height: "100%", duration: 0.3 });
          setActiveLink("navProjetos");
        },
        onLeave: () => {
          gsap.to("#navProjetos::after", { height: "0%", duration: 0.3 });
          setActiveLink(null);
        },
        onEnterBack: () => {
          gsap.to("#navProjetos::after", { height: "100%", duration: 0.3 });
          setActiveLink("navProjetos");
        },
        onLeaveBack: () => {
          gsap.to("#navProjetos::after", { height: "0%", duration: 0.3 });
          setActiveLink(null);
        },
      },
    });
    gsap.to("#Habilidades", {
      scrollTrigger: {
        trigger: "#Habilidades",
        start: "top center",
        end: "bottom center",
        scrub: true,
        onEnter: () => {
          gsap.to("#navHabilidades::after", { height: "100%", duration: 0.3 });
          setActiveLink("navHabilidades");
        },
        onLeave: () => {
          gsap.to("#navHabilidades::after", { height: "0%", duration: 0.3 });
          setActiveLink(null);
        },
        onEnterBack: () => {
          gsap.to("#navHabilidades::after", { height: "100%", duration: 0.3 });
          setActiveLink("navHabilidades");
        },
        onLeaveBack: () => {
          gsap.to("#navHabilidades::after", { height: "0%", duration: 0.3 });
          setActiveLink(null);
        },
      },
    });
  }, []);

  return (
    <NavContainer>
      <NavUL>
        <NavLI id="navInicio">
          <Link to="inicio" spy={true} smooth={true} offset={0} duration={500}>
            Inicio
          </Link>
        </NavLI>

        <NavLI id="navSobre" active={activeLink === "navSobre"}>
          <Link to="Sobre" spy={true} smooth={true} offset={0} duration={500}>
            Sobre mim
          </Link>
        </NavLI>

        <NavLI id="navProjetos" active={activeLink === "navProjetos"}>
          <Link
            to="Projetos"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            Projetos
          </Link>
        </NavLI>

        <NavLI id="navHabilidades" active={activeLink === "navHabilidades"}>
          <Link
            to="Habilidades"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            Habilidades
          </Link>
        </NavLI>
      </NavUL>
    </NavContainer>
  );
}

export default Navegacao;
