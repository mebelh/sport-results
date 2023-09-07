import styled from 'styled-components';
import getColor from 'utils/getColor';

export const SpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Spin = styled.svg.attrs({
  viewBox: '0 0 30 30',
})`
  width: 30px;
  height: 30px;
`;

export const SpinnerCircle = styled.circle.attrs({
  cx: 15,
  cy: 15,
  r: 10,
})`
  animation: spin 2s linear infinite;
  stroke-dasharray: 10;
  stroke: ${getColor('background', 'primary')};
  stroke-width: 3px;
  fill: transparent;
  transform-box: fill-box;
  transform-origin: center;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
