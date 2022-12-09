import styled from 'styled-components';

const Container = styled.div`
  padding: 2.5rem 3rem;
  background-color: ${({ theme }) => theme.colors.darkL};
`;

const List = styled.ul`
  max-width: 120rem;
  padding: 0;
  margin: 0 auto;
  list-style: none;
  display: flex;
  justify-content: flex-end;
  gap: 2rem;
`;

const ListItem = styled.li`
  font-size: 2rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.light};

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

export { Container, List, ListItem };
