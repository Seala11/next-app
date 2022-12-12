import styled from 'styled-components';

const FlexContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  gap: 4rem;
  max-width: 120rem;
  padding: 0 0 7rem;
`;

export { FlexContainer };
