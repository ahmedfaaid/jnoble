import styled from 'styled-components';

export const Hero = styled.section`
  width: 100%;
  height: calc(100vh - 8rem);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  h1 {
    margin-bottom: 8rem;
    font-size: 5rem;
    text-transform: uppercase;
  }

  img {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 40rem;
  }
`;
