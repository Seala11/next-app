import styled from 'styled-components';

const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  max-width: 1200px;
`;

const Card = styled.div`
  color: inherit;
  text-decoration: none;
  border: 1px solid black;
  border-radius: 10px;
  transition: color 0.15s ease, border-color 0.15s ease;
  word-break: break-word;
  width: 200px;
  overflow: hidden;

  &:hover,
  :focus,
  :active {
    color: #0070f3;
    border-color: #0070f3;
  }
`;

// const StyledA = styled.a`
//   margin: 0 0 1rem 0;
//   font-size: 1.5rem;
// `;

export { FlexContainer, Card };
