import styled from 'styled-components';

const Title = styled.h1`
  margin: 0;
  font-size: 2.6rem;
  align-self: flex-start;
  padding: 3rem 0;
  font-weight: 400;
`;

const Button = styled.button`
  cursor: pointer;
  width: 16rem;
  height: 6rem;
  font-size: 1.6rem;
  font-weight: 400;
  border: 0.2rem solid ${({ theme }) => theme.colors.accent};
  border-radius: 1rem;
  color: ${({ theme }) => theme.colors.light};
  background-color: transparent;
  transition: all 0.2s ease-in-out;
  align-self: baseline;
  margin: 2rem 0;

  &:hover {
    background-color: ${({ theme }) => theme.colors.accent};
  }

  &:disabled {
    cursor: auto;
    color: ${({ theme }) => theme.colors.accent};

    &:hover {
      background-color: transparent;
    }
  }
`;

const LoadButton = styled(Button)`
  align-self: center;
  width: 100%;
`;

export { Title, Button, LoadButton };
