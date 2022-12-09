import React, { ReactElement } from 'react';
import Meta from '../../components/Meta';
import Navbar from '../../components/Navbar/Navbar';
import { Container, Main } from './MainLayout.styled';

type Props = {
  children: ReactElement;
};

const MainLayout = ({ children }: Props) => {
  return (
    <>
      <Meta />
      <Navbar />
      <Container>
        <Main>{children}</Main>
      </Container>
    </>
  );
};

export default MainLayout;
