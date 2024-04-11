import styled from "styled-components";
import { device } from "../../Styles/media";

export const HeaderContainer = styled.header`
  border-bottom: 5px solid #623cea;
  width: 100vw;
  height: 100px;
  background-color: #1d1d21;
`;

export const NavMobile = styled.nav `
  display: none;

  @media ${device.sm} {
    display: block;
    width: 100%;
    display: flex;
    justify-content: space-around;
  }
`;

export const NavContainer = styled.nav`
  display: flex;
  padding: 0px 260px;
  height: 100%;
  align-items: center;
  justify-content: space-between;
  color: whitesmoke;
  font-size: 20px;  

  @media ${device.sm} {
    padding: 0;
  }

  @media ${device.md} {
    padding: 0 70px;
    font-size: 24px;
  }
`;

export const SpanLogo = styled.span `
  @media ${device.sm} {
      display: none;
  }
`;

export const UlStyled = styled.ul`
  display: flex;
  list-style: none;
  gap: 25px;

  @media ${device.sm} {
    display: none;
  }
`;

export const LiStyled = styled.li`
  position: relative;
  cursor: pointer;

  &::after {
    content: "";
    position: absolute;
    width: 0;
    height: 4px;
    border-radius: 10px;
    background-color: #623cea;
    bottom: 0;
    left: 0;
    transition: width 0.3s ease-in-out;
  }

  &:hover::after {
    width: 100%;
  }
`;
