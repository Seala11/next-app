import styled from 'styled-components';
import { device } from '../../shared/styles/media';

type Props = {
  src: string;
};

const Container = styled.div<Props>`
  width: 100vw;
  height: calc(100vh - 10rem);
  background-image: ${({ src }) => `linear-gradient(#1b1e2eb8, #10141f), url(${src})`};
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
  background-blend-mode: inherit;
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 120rem;
  margin: 0 auto;
  padding: 0 3rem 7rem;

  img {
    border-radius: 1rem;
    object-fit: contain;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 3rem;

  @media ${device.tablet} {
    flex-direction: column;
  }

  img {
    @media ${device.tablet} {
      color: transparent;
      height: 30rem;
      width: auto;
      align-self: flex-start;
    }

    @media ${device.mobile} {
      height: auto;
      width: 80vw;
      margin: 0 auto;
    }
  }
`;

const Button = styled.button`
  cursor: pointer;
  width: 16rem;
  height: 6rem;
  font-size: 1.6rem;
  font-weight: 400;
  border: 0.2rem solid ${({ theme }) => theme.colors.accent};
  border-radius: 1rem;
  color: ${({ theme }) => theme.colors.light};
  background-color: transparent;
  transition: all 0.2s ease-in-out;
  align-self: baseline;
  margin: 2rem 0;

  &:hover {
    background-color: ${({ theme }) => theme.colors.accent};
  }
`;

const InfoContainer = styled.div`
  align-self: flex-start;
  flex-direction: column;
  gap: 1rem;
  font-weight: 300;

  p {
    margin: 0;
    padding: 1rem 0;
  }
`;

const Title = styled.h1`
  margin: 0;
  font-size: 2.6rem;
  align-self: flex-start;
  padding: 0;
  font-weight: 600;

  span {
    font-weight: 400;
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  gap: 1rem;
  font-size: 1.4rem;
`;

const Tagline = styled.p`
  font-size: 1.6rem;
  font-style: italic;
  color: ${({ theme }) => theme.colors.light};
  filter: opacity(0.8);
`;

const SubTitle = styled.h2`
  margin: 0;
  font-size: 2rem;
  padding: 1rem 0;
  font-weight: 600;

  span {
    font-weight: 300;
    font-size: 1.6rem;
  }
`;

const SubTitleInfo = styled.p`
  margin: 0;
  font-size: 1.6rem;
  padding: 1rem 0;
  font-weight: 600;

  span {
    font-weight: 300;
    font-size: 1.6rem;
  }
`;

export {
  Container,
  FlexContainer,
  Button,
  Title,
  InfoContainer,
  ImageContainer,
  TitleWrapper,
  Tagline,
  SubTitle,
  SubTitleInfo,
};
