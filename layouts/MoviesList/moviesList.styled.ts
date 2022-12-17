import styled from 'styled-components';
import { device } from '../../shared/styles/media';

const FlexContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  gap: 4rem;
  max-width: 120rem;
  padding: 0 0 7rem;
  width: 90vw;
  flex: 1;

  @media ${device.tablet} {
    grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
    gap: 1rem;
  }

  @media ${device.mobile} {
    grid-template-columns: repeat(auto-fit, minmax(14rem, 1fr));
    gap: 1rem;
  }
`;

export { FlexContainer };
