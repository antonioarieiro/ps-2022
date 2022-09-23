import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
margin-top: 10px;
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 100%;
background: #E5E3E5;
`;

const Title = styled.section`
padding: 10px;
height: 300px;
margin: auto;
display: flex;
align-items:center;
font-size: 24px;
font-family: Roboto;
background: #E5E3E5;
`;

const Home: React.FC = () => {
  return (
    <div style={{height: '100vh'}}>
      <Container>
        <Title>
          Hellow Word PS-2022 UFT
        </Title>
      
      </Container>
    </div>
  );
};

export default Home;