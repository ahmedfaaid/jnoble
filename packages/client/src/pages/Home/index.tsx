import React from 'react';
import styled from 'styled-components';
import Layout from '../../components/Layout';
import { theme as t } from '../../styles/theme';
import HomeBackground from '../../images/ricardo-gomez-angel-7bzbyafVTYg-unsplash.jpg';

const StyledHome = styled.div`
  background-image: url(${HomeBackground}),
    linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
  background-blend-mode: overlay;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${t.colors.white};

  div {
    text-align: center;

    h2 {
      font-size: 6rem;
      margin-bottom: 5rem;
    }

    p {
      font-size: 3rem;
      margin-bottom: 3rem;
      font-weight: 300;
    }
  }
`;

function Home() {
  return (
    <Layout>
      <StyledHome>
        <div>
          <h2>Find The Best Workers for Your Projects</h2>
          <p>We Interview, Verify and Vet All Workers</p>
          <p>All You Do Is Get The Best Workers</p>
        </div>
      </StyledHome>
    </Layout>
  );
}

export default Home;
