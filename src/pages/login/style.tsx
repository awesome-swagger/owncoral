/** @jsxRuntime classic */
/** @jsx jsx */
import styled from '@emotion/styled';
import SharedCard from '../../components/shared/Card';
import Button from '../../components/shared/Button';

export const Card = styled(SharedCard)`
  min-width: 300px;
  width: 90%;
  max-width: 360px;

  border-radius: 20px;
  padding: 40px;
  position: absolute;

  // Center vertically and horizontally
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
`;

export const CardTitle = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  width: 100%;
  text-align: center;
  font-size: 145%;
  font-weight: 600;
`;

// To get the icons to be visually in the input line,
// we stick it inside a div flexbox which
// 1) renders the border and 2) holds icons and actual input
export const InputLine = styled.div`
  width: 100%;
  height: 3em;
  margin-bottom: 2em;
  border-radius: 100vh;
  border: 1px solid rgba(180, 180, 180, 0.8);
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors.bg};
  color: ${(props) => props.theme.colors.fg};

  &:focus-within {
    border: 1px solid darkgray;
  }

  input {
    border-radius: inherit;
    background-color: inherit;
    border: none;
    width: 100%;
    height: 100%;
    font-size: 85%;
    box-sizing: border-box;

    &:focus {
      outline: none;
    }

    &::placeholder {
      color: ${(props) => props.theme.colors.sBg};
    }
  }
`;

export const LoginBtn = styled(Button)`
  margin-left: auto;
  margin-right: auto;
  width: 70%;
  padding: 0;

  input {
    background-color: ${(props) => props.theme.colors.pFg};
    padding: 0.6em;
    color: ${(props) => props.theme.colors.bg};
    border-radius: inherit;
    width: 100%;
    height: 100%;
    border: 0;
    font-size: 120%;
    outline: none;
  }
`;
