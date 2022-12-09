import styled from 'styled-components';

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
  max-width: 120rem;
`;

const Card = styled.div`
  color: inherit;
  text-decoration: none;
  border-radius: 1rem;
  transition: color 0.15s ease, border-color 0.15s ease;
  word-break: break-word;
  width: 20rem;
  overflow: hidden;

  &:hover,
  :focus,
  :active {
    box-shadow: 0 0 0.4rem 0.4rem ${({ theme }) => theme.colors.accent};
  }
`;

export { FlexContainer, Card };
