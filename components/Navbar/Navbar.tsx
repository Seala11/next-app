import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { MdMovie } from 'react-icons/md';
import { Container, FlexContainer, List, ListItem, Logo } from './Navbar.styled';

const Navbar = () => {
  const router = useRouter();

  return (
    <Container>
      <FlexContainer>
        <Logo>
          <MdMovie fill="#e74c3c" />
          <h1>Movie App</h1>
        </Logo>
        <List>
          <ListItem active={router.route === '/'}>
            <Link href="/">Movies</Link>
          </ListItem>
          <ListItem active={router.route === '/bookmarked'}>
            <Link href="/bookmarked">Bookmarked</Link>
          </ListItem>
        </List>
      </FlexContainer>
    </Container>
  );
};

export default Navbar;
