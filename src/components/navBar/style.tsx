/** @jsxRuntime classic */
/** @jsx jsx */
import styled from '@emotion/styled'
import { Link } from "react-router-dom";
import { theme } from '../../shared/theme';

export const Nav = styled.nav`
  background-color: rgb(255, 255, 255);
  position: fixed;
  width: 100%;
  top: 0;
  box-shadow: 0 -3px 15px 0px rgba(0, 0, 0, 0.05);
  z-index: 10;
  display: flex;
  align-items: stretch;
  height: ${theme.global.height.navbar}px;
  justify-content: flex-end;
`;

export const Navigation = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  display: flex;
  align-items: stretch;
  width: 100%;
  height: 100%;
  justify-content: center;
`;

export const MenuNavitation = styled(Navigation)`
  justify-content: flex-end;
  
  @media ${({ theme }) => theme.global.mediaQueries.md} {
    display: none;
  }
`;

export const Footer = styled.footer`
  background-color: rgb(255, 255, 255);
  position: fixed;
  width: 100%;
  bottom: 0;
  box-shadow: 0 -3px 15px 0px rgba(0, 0, 0, 0.05);
  z-index: 10;
  align-items: stretch;
  height: ${theme.global.height.navbar}px;
  display: none;
  @media ${({ theme }) => theme.global.mediaQueries.md} {
    display: flex;
  }  
`;

interface StyledLinkProps {
  selected: boolean
}
export const StyledLink = styled(Link)<StyledLinkProps>`
  color: ${(props) => (props.selected ? "var(--contrast-color)" : "rgb(130, 130, 130)")};
  display: block;
  padding: 10px 0;
  text-decoration: none;
  transition: 0.2s;
  font-size: 80%;
  width: 66px;

  :active {
    transform: scale(0.9);
  }

  :hover {
    background-color: rgb(245, 245, 245);
  }

  @media (pointer: coarse) {
    :active {
      transform: none;
    }

    :hover {
      background-color: inherit;
    }
  }
`;

export const DropDown = styled.div`
  display: inline-block;
  position: relative;

  a {
    display: block;
    padding: 14px;
    text-decoration: none;
    font-size: 13px;
    text-transform: uppercase;
    font-weight: bold;
    color:  #4CAF50;

    :hover {
      color:#3e8e41;
    }
  }

  ul {
    list-style-type: none;
    display: block;
    margin: 0;
    padding: 0;
    position: absolute;
    width: 100%;
    box-shadow: 0 6px 5px -5px rgba(0,0,0,0.3);
    overflow: hidden;
    right: 0;
    min-width: 100px;
  }

  li {
    height: 0px;
    overflow: hidden;
    transition: all 500ms;
    transition-delay: 300ms;
    background: white;

    a {
      color: black;
    }

    :hover a {
      color: #3e8e41;
    }
  }

  :hover li {          
    height: 40px;
  }
`;