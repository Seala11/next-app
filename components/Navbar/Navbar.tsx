import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { MdMovie } from 'react-icons/md';
import { Container, List, ListItem, Logo } from './Navbar.styled';

const Navbar = () => {
  const router = useRouter();

  return (
    <Container>
      <div>
        <Logo>
          <MdMovie fill="#e74c3c" />
          Movie App
        </Logo>
        <List>
          <ListItem active={router.route === '/'}>
            <Link href="/">Movies</Link>
          </ListItem>
          <ListItem active={router.route === '/bookmarked'}>
            <Link href="/bookmarked">Bookmarked</Link>
          </ListItem>
        </List>
      </div>
    </Container>
  );
};

export default Navbar;
