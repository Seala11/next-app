import styled from 'styled-components';

type Props = {
  src: string;
};

const Container = styled.div<Props>`
  width: 100vw;
  height: 60rem;
  background-image: ${({ src }) => `linear-gradient(#1b1e2eb8, #10141f), url(${src})`};
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
  background-blend-mode: inherit;
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
  max-width: 120rem;

  img {
    border-radius: 1rem;
    object-fit: contain;
  }
`;

export { Container, FlexContainer };
