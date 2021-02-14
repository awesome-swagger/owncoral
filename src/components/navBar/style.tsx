/** @jsxRuntime classic */
/** @jsx jsx */
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { withTheme } from '@emotion/react';

export const Nav = withTheme(styled.nav`
  background-color: ${({ theme }) => theme.colors.bg};
  ${({ theme }) => theme.mdDepthShadow(4)}
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 10;
  display: flex;
  align-items: stretch;
  height: ${({ theme }) => theme.navHeight};
  justify-content: flex-end;
`);

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

export const MenuNavigation = withTheme(styled(Navigation)`
  justify-content: flex-end;

  @media ${({ theme }) => theme.mediaQueries.md} {
    display: none;
  }
`);

export const Footer = withTheme(styled.footer`
  background-color: ${({ theme }) => theme.colors.bg};
  height: ${({ theme }) => theme.navHeight};
  ${({ theme }) => theme.mdDepthShadow(4)}
  position: fixed;
  width: 100%;
  bottom: 0;
  z-index: 10;
  align-items: stretch;

  display: none;
  @media ${({ theme }) => theme.mediaQueries.md} {
    display: flex;
  }
`);

interface StyledLinkProps {
  selected: boolean;
}

export const StyledLink = styled(Link)<StyledLinkProps>`
  color: ${(props) => (props.selected ? props.theme.colors.fg : 'gray')};
  display: block;
  padding: 10px 0;
  text-decoration: none;
  transition: 0.2s;
  font-size: 80%;
  width: 7em;
  height: 100%;

  :active {
    transform: scale(0.9);
  }

  :hover {
    background-color: ${({ theme }) => theme.colors.bg2};
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

export const DropDown = withTheme(styled.div`
  display: inline-block;
  position: relative;

  ul {
    list-style-type: none;
    display: block;
    margin: 0;
    padding: 0;
    position: absolute;
    width: 100%;
    box-shadow: 0 6px 5px -5px rgba(0, 0, 0, 0.3);
    overflow: hidden;
    right: 0;
    min-width: 100px;
    border-radius: 0 0 10px 10px;

    li {
      height: 0px;
      overflow: hidden;
      transition: all 300ms;
      background: white;

      a {
        color: black;
        display: block;
        vertical-align: middle;
        text-decoration: none;
        font-size: 13px;
        font-weight: bold;
        color: ${({ theme }) => theme.colors.fg2};
        background-color: ${({ theme }) => theme.colors.bg};
        height: 100%;
        // match actual height to center
        // see https://css-tricks.com/centering-css-complete-guide/
        line-height: 40px;
        padding-left: 15px;
      }

      :hover a {
        color: ${({ theme }) => theme.colors.fg};
        background-color: ${({ theme }) => theme.colors.sBg};
      }
    }
  }

  :hover li {
    height: 40px;
  }
`);
