import styled from 'styled-components';

const Container = styled.div`
  background-color: gray;
  padding: 1rem 3rem;
`;

const List = styled.ul`
  margin: 0;
  list-style: none;
  display: flex;
  justify-content: center;
  gap: 2rem;
`;

const ListItem = styled.li`
  font-size: 1.6rem;
  font-weight: 400;

  &:hover {
    color: blue;
  }
`;

export { Container, List, ListItem };
