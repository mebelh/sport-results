import styled from 'styled-components';
import getColor from 'utils/getColor';

export const NavigationLinksWrapper = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;

  & > :first-child {
    grid-column: 1/3;
    height: 150px;
    box-shadow: 0 0 10px ${getColor('background', 'accent')};
  }

  & > a {
    height: 70px;
    border-radius: 5px;
    box-shadow: 0 0 6px ${getColor('background', 'accent')};
  }
`;
