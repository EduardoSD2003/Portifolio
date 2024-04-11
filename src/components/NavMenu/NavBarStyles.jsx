import styled from "styled-components";
import { device } from "../Styles/media";


export const NavContainer = styled.div`
  position: fixed;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: end;
  height: 100vh;

  @media ${device.sm} {
    display: none;
  }

  @media ${device.md} {
    display: none;
  }
`;



export const NavUL = styled.ul`
  margin-right: 100px;
  flex-direction: column;
  display: flex;
  justify-content: center;
  gap: 50px;
  width: 150px;
  height: 35vh;
  border-right: solid 1px #e1e1e284;
  overflow: visible;

`;

export const NavLI = styled.li`
  position: relative;
  padding-right: 15px;
  cursor: pointer;
  font-size: 20px;
  text-align: end;
  overflow: visible;
  color: aliceblue;
  display: flex;
  align-items: center;
  justify-content: end;
  height: 50px;

  &::after {
    content: "";
    position: absolute;
    width: 5px;
    height: ${props => props.active ? "100px" : "0"};
    border-radius: 10px;
    background-color: white;
    top: -50%;
    right: 0;
    transform: translateX(50%);
    transition: height 0.3s ease-in-out;

    @media ${device.lg} {
    height: ${props => props.active ? "60px" : "0"};
    }
  }

`;
