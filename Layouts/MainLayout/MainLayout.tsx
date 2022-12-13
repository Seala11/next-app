import React, { ReactElement } from 'react';
import Meta from '../../components/Meta';
import Navbar from '../../components/Navbar/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Container, Main } from './MainLayout.styled';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';

type Props = {
  children: ReactElement;
};

const MainLayout = ({ children }: Props) => {
  const router = useRouter();
  return (
    <>
      <Meta />
      <Navbar />
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
      <AnimatePresence>
        <Container
          key={router.route}
          as={motion.div}
          initial="initialState"
          animate="animateState"
          exit="exit"
          variants={{
            initialState: { opacity: 0 },
            animateState: { opacity: 1 },
            exit: { opacity: 0 },
          }}
        >
          <Main>{children}</Main>
        </Container>
      </AnimatePresence>
    </>
  );
};

export default MainLayout;
