import Link from 'next/link';
import React from 'react';
import { Container, List, ListItem } from './Navbar.styled';

const Navbar = () => {
  return (
    <Container>
      <List>
        <ListItem>
          <Link href="/">Movies</Link>
        </ListItem>
        <ListItem>
          <Link href="/tvshows">TV shows</Link>
        </ListItem>
      </List>
    </Container>
  );
};

export default Navbar;
