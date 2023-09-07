import Typography from 'components/typography';
import styled from 'styled-components';
import getColor from 'utils/getColor';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Value = styled.span<{
  isActive: boolean;
}>`
  position: relative;
  
  &::after {
    content: "";
    position: absolute;
    right: 0;
    height: 100%;
    width: 20px;
    background-color: ${getColor('background', 'accent')};
`;

export const Label = styled(Typography.Text3)``;
