import { memo } from 'react';
import Icons from './Icons';
import StyledSvg from './styles';

const Icon = ({
  name,
  strokeColor,
  width,
  height,
  fill,
  viewBox,
  onClick,
}) => {
  return (
    <StyledSvg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox={viewBox}
      fill={fill}
      onClick={onClick}
      style={onClick && {cursor: 'pointer'}}
    >
      {
      name && Icons()[name]
      }
    </StyledSvg>
  );
};

export default memo(Icon);
