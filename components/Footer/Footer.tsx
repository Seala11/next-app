import Link from 'next/link';
import React from 'react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { Container, FlexContainer, List, ListItem } from '../Navbar/Navbar.styled';

const Footer = () => {
  return (
    <Container>
      <FlexContainer>
        <List>
          <ListItem active={false}>
            <Link href="https://github.com/Seala11">
              <BsGithub />
            </Link>
          </ListItem>
          <ListItem active={false}>
            <Link href="https://www.linkedin.com/in/hanna-papova-56a0776b/">
              <BsLinkedin />
            </Link>
          </ListItem>
        </List>
      </FlexContainer>
    </Container>
  );
};

export default Footer;
