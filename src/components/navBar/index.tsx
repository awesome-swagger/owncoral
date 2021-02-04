/** @jsxRuntime classic */
/** @jsx jsx */
import React, { useState } from "react";
import { css, jsx } from "@emotion/react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { ReactComponent as LogoText } from "../../assets/logo_text.svg";
import { FileText, Home } from "react-feather";
import { GrLineChart } from "react-icons/gr";
import { CgProfile } from "react-icons/cg";
import * as Styled from './style';
import { theme } from "../../shared/theme";

const navLinks = {
  Portfolio: {
    url: "/portfolio",
    image: <GrLineChart size={20} />
  },
  Opportunities: {
    url: "/new-opportunities",
    image: <Home size={20} />
  },
  Documents: {
    url: "/documents",
    image: <FileText size={20} />
  }
};

const logoStyle = css`
  display: flex;
  @media ${theme.global.mediaQueries.md} {
    width: 100%;
    justify-content: center;
  }
`;

const NavBar = (props: {}) => {
  const [selectedMenu, setSelectedMenu] = useState("Portfolio");

  return (
    <React.Fragment>
      <Styled.Nav {...props}>
        <Link to="/" css={logoStyle}>
          <Logo
            css={css`
              height: auto;
              width: 30px;
              margin: 0 10px;
              fill: var(--main-color);
            `}
          />
          <LogoText
            css={css`
              margin-left: 0;
              margin-top: 18px;
              height: 40px;
              width: 100px;
              fill: var(--main-color);
            `}
          />
        </Link>
        <Styled.MenuNavitation>
          {Object.entries(navLinks).map(([text, { url, image }], index) => (
            <li key={index}>
              <Styled.StyledLink
                key={text}
                to={url}
                selected={selectedMenu === text}
                onClick={() => setSelectedMenu(text)}
              >
                <div css={{ textAlign: "center", padding: "10px 0" }}>
                  <div>{image}</div>
                  <div>{text}</div>
                </div>
              </Styled.StyledLink>
            </li>
          ))}
        </Styled.MenuNavitation>
        
        <Styled.DropDown>
          {/* eslint-disable-next-line  */}
          <a><CgProfile size={40} /></a>
          <ul>
            <li><Link to="#">Profile</Link></li>
            <li><Link to="#">Log out</Link></li>
          </ul>
        </Styled.DropDown>
      </Styled.Nav>

      <Styled.Footer {...props}>
        <Styled.Navigation>
          {Object.entries(navLinks).map(([text, { url, image }], index) => (
            <li key={index}>
              <Styled.StyledLink
                key={text}
                to={url}
                selected={selectedMenu === text}
                onClick={() => setSelectedMenu(text)}
              >
                <div css={{ textAlign: "center", padding: "10px 0" }}>
                  <div>{image}</div>
                  <div>{text}</div>
                </div>
              </Styled.StyledLink>
            </li>
          ))}
        </Styled.Navigation>
      </Styled.Footer>
    </React.Fragment>
  );
};

export default NavBar;