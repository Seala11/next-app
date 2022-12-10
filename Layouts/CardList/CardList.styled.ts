import styled from 'styled-components';

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
  row-gap: 2rem;
  max-width: 120rem;
`;

const Card = styled.div`
  color: inherit;
  text-decoration: none;
  border-radius: 1rem;
  transition: color 0.15s ease, border-color 0.15s ease;
  word-break: break-word;
  width: 20rem;
  min-height: 40rem;
  overflow: hidden;

  &:hover,
  :focus,
  :active {
    box-shadow: 0 0 1rem 0.1rem ${({ theme }) => theme.colors.accent};
    background-color: ${({ theme }) => theme.colors.darkL};;
  }

  img {
    border-radius: 1rem;
  }

  h2 {
    margin: 0;
    padding: 0.8rem 1rem;
    font-size: 1.8rem;
    font-weight: 400;
  }

  p {
    margin: 0;
    padding: 0 1rem 1rem 1rem;
    font-size: 1.4rem;
    font-weight: 400;
  }
`;

export { FlexContainer, Card };
