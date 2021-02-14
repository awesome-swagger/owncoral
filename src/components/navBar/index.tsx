/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react';
import { css, jsx, useTheme } from '@emotion/react';
import { Link, useLocation } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/coral.svg';
import { TrendingUp, FileText, Home } from 'react-feather';
import * as Styled from './style';

const navLinks = {
  Portfolio: {
    url: '/portfolio',
    image: <TrendingUp size={20} />,
  },
  Opportunities: {
    url: '/new-opportunities',
    image: <Home size={20} />,
  },
  Documents: {
    url: '/documents',
    image: <FileText size={20} />,
  },
};

const currentPage = (path: string): string | null => {
  console.info(path);
  for (const [name, { url }] of Object.entries(navLinks)) {
    if (path.startsWith(url)) {
      return name;
    }
  }
  return null;
};

const NavBar = (props: {}) => {
  const location = useLocation();
  const item = currentPage(location.pathname);
  const theme = useTheme();

  const logoStyle = css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 180px;
    @media ${theme.mediaQueries.md} {
      position: fixed;
      left: 0;
      right: 0;
      top: 0;
      margin-left: auto;
      margin-right: auto;
      height: ${theme.navHeight};
    }
  `;

  return (
    <React.Fragment>
      <Styled.Nav {...props}>
        <Link to="/" css={logoStyle}>
          <Logo css={{ position: 'relative', bottom: '3px' }} height="auto" width="40px" fill={theme.colors.p} />
          <h4 css={{ color: theme.colors.p }}>Coral</h4>
        </Link>
        <Styled.MenuNavigation>
          {Object.entries(navLinks).map(([text, { url, image }], index) => (
            <li key={index}>
              <Styled.StyledLink key={text} to={url} selected={item === text}>
                <div css={{ textAlign: 'center' }}>
                  <div>{image}</div>
                  <div>{text}</div>
                </div>
              </Styled.StyledLink>
            </li>
          ))}
        </Styled.MenuNavigation>

        <Styled.DropDown>
          {/* TODO: extract component? */}
          <a css={{ height: '100%', display: 'block' }} href="/profile">
            <svg viewBox={'0 0 100 100'} css={{ height: '65px', width: '65px' }}>
              <circle cx={'50%'} cy={'50%'} r={26} fill="purple" />
              <text
                x="50%"
                y="50%"
                fontFamily="monospace"
                fill="white"
                dominantBaseline="central"
                textAnchor="middle"
                fontSize="34px"
              >
                B
              </text>
            </svg>
          </a>

          <ul>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link to="/logout">Log out</Link>
            </li>
          </ul>
        </Styled.DropDown>
      </Styled.Nav>

      <Styled.Footer {...props}>
        <Styled.Navigation>
          {Object.entries(navLinks).map(([text, { url, image }], index) => (
            <li key={index}>
              <Styled.StyledLink key={text} to={url} selected={item === text}>
                <div css={{ textAlign: 'center' }}>
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
