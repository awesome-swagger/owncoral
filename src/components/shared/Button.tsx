/** @jsx jsx */
import styled from '@emotion/styled';

const Button = styled.button<{ elevation?: number; isActive?: boolean }>`
  // Set depth to 8 if active, 2 otherwise, unless overridden by props.elevation
  ${(props) => props.theme.mdDepthShadow(props.elevation || (props.isActive ? 8 : 2))}

  display: block;
  border-radius: 100vh; // Rounded sides
  padding: 0.7em 1.2em;
  border: 0;

  ${(props) => props.theme.textStyles.button}
  ${(props) => {
    console.info(props.theme.textStyles.button);
    return false;
  }}
`;

export default Button;
