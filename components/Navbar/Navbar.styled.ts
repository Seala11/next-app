import styled from 'styled-components';

const Container = styled.div`
  padding: 2.5rem 3rem;
  background-color: ${({ theme }) => theme.colors.darkL};

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 120rem;
    width: 100%;
    margin: 0 auto;
  }
`;

const Logo = styled.h1`
  font-size: 2rem;
  font-weight: 400;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  svg {
    font-size: 3rem;
  }
`;

const List = styled.ul`
  flex-grow: 1;
  padding: 0;
  margin: 0 auto;
  list-style: none;
  display: flex;
  justify-content: flex-end;
  gap: 2rem;
`;

export type LinkProps = {
  active: boolean;
};

const ListItem = styled.li<LinkProps>`
  font-size: 2rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.light};
  color: ${({ theme, active }) => (active ? theme.colors.light : theme.colors.accentL)};

  &:hover {
    color: ${({ theme }) => theme.colors.light};
  }
`;

export { Container, List, ListItem, Logo };
