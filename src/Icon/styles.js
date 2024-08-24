import { styled } from 'styled-components';

const StyledSvg = styled.svg`
  fill: ${(props) => props.fill};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

export default StyledSvg;
