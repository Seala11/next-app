import React, { ReactElement } from 'react';
import Meta from '../../components/Meta';
import Navbar from '../../components/Navbar/Navbar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Container, Main } from './MainLayout.styled';

type Props = {
  children: ReactElement;
};

const MainLayout = ({ children }: Props) => {
  return (
    <>
      <Meta />
      <Navbar />
      <ToastContainer
        position="bottom-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <Container>
        <Main>{children}</Main>
      </Container>
    </>
  );
};

export default MainLayout;
