import React, { ReactElement } from 'react';
import Meta from '../../components/Meta';
import Navbar from '../../components/Navbar/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Container, FlexContainer, Main } from './MainLayout.styled';
import Footer from '../../components/Footer/Footer';

type Props = {
  children: ReactElement;
};

const MainLayout = ({ children }: Props) => {
  return (
    <>
      <Meta />
      <ToastContainer
        position="bottom-right"
        autoClose={3500}
        hideProgressBar={true}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <FlexContainer>
        <Navbar />
          <Container>
            <Main>{children}</Main>
          </Container>
        <Footer />
      </FlexContainer>
    </>
  );
};

export default MainLayout;
