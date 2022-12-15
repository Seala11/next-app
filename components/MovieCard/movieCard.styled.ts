import styled from 'styled-components';
import { device } from '../../shared/styles/media';

export const Card = styled.div`
  color: inherit;
  text-decoration: none;
  border-radius: 1rem;
  transition: color 0.15s ease, border-color 0.15s ease;
  word-break: break-word;
  width: 20rem;
  min-height: 40rem;
  overflow: hidden;
  position: relative;
  margin: 0 auto;

  @media ${device.tablet} {
    width: 16rem;
    min-height: 30rem;
  }

  @media ${device.mobile} {
    width: 14rem;
  }

  img {
    border-radius: 1rem;
    width: 20rem;
    height: auto;

    @media ${device.tablet} {
      width: 16rem;
    }

    @media ${device.mobile} {
      width: 14rem;
    }
  }

  h2 {
    margin: 0;
    padding: 0.8rem 1rem;
    font-size: 1.8rem;
    font-weight: 400;
  }

  p {
    margin: 0;
    padding: 0 1rem 1rem 1rem;
    font-size: 1.4rem;
    font-weight: 300;
    filter: opacity(0.8);
  }
`;

export const MarkButton = styled.button`
  position: absolute;
  background-color: #04040482;
  border-radius: 50%;
  border: none;
  width: 3.6rem;
  height: 3.6rem;
  top: 1.6rem;
  right: 1.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.15s ease-in-out;

  @media ${device.tablet} {
    top: 1rem;
    right: 1rem;
  }

  @media ${device.mobile} {
    top: 0.5rem;
    right: 0.5rem;
  }

  svg {
    fill: ${({ theme }) => theme.colors.light};
    height: 2.4rem;
    width: 2.4rem;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.accent};
    cursor: pointer;
  }

  &:disabled {
    &:hover {
      background-color: ${({ theme }) => theme.colors.accent};
      cursor: pointer;
    }
  }
`;
