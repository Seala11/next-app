import React, { ReactElement } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import { Container, Main } from './MainLayout.styled';

type Props = {
  children: ReactElement;
};

const MainLayout = ({ children }: Props) => {
  return (
    <>
      <Navbar />
      <Container>
        <Main>{children}</Main>
      </Container>
    </>
  );
};

export default MainLayout;
