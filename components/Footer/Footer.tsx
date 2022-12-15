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
            <Link href="https://github.com/Seala11" legacyBehavior>
              <a target="_blank" aria-label="github">
              <BsGithub />
              </a>
            </Link>
          </ListItem>
          <ListItem active={false}>
            <Link href="https://www.linkedin.com/in/hanna-papova-56a0776b/" legacyBehavior>
              <a target="_blank" aria-label="linkedin">
                <BsLinkedin />
              </a>
            </Link>
          </ListItem>
        </List>
      </FlexContainer>
    </Container>
  );
};

export default Footer;
