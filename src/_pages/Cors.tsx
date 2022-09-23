import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
margin-top: 10px;display: flex;
height: 100vh;
flex-direction: column;
align-items: center;
justify-content: center;
width: 100%;
background: #E5E3E5;
`;

const Title = styled.section`
padding: 5px;
height: 200px;
margin: auto;
display: flex;
align-items:center;
font-size: 24px;
font-family: Roboto;
background: #E5E3E5;
`;

const Wrapper = styled.section`
heigth: 250px;
margin-top: 20px;
width: 80%;
font-size: 22px;
font-family: Roboto,medium;
`;

const Cors: React.FC = () => {
  return (
    <div style={{height: '100vh'}}>
      <Container>
        <Title>
          Cors
        </Title>
        <Wrapper>
        O CORS (Cross-origin Resource Sharing) é um mecanismo utilizado pelos navegadores para compartilhar recursos entre diferentes origens. O CORS é uma especificação do W3C e faz uso de headers do HTTP para informar aos navegadores se determinado recurso pode ser ou não acessado.
        </Wrapper>
        <Wrapper>
        CORS é o acrônimo de Cross-origin Resource Sharing (Compartilhamento de Recursos de Origem Cruzada). Na prática, ele informa aos navegadores se um determinado recurso pode ou não ser acessado. 
        </Wrapper>
        <Wrapper>
        Basicamente, todo navegador possui um mecanismo de segurança chamado de same-origin policy. Portanto, ele é usado para garantir mais segurança e limitar como um documento ou script de uma determinada origem pode interagir com recursos de outra origem diferente. 
        </Wrapper>
        <img src="https://reflectoring.io/images/posts/cors/CORS-terms_hub1ff3b62975180e07fd356e72f624b75_46574_731x0_resize_box_3.png" alt="img" style={{marginBottom: '40px', marginTop: '20px'}}/>
      </Container>
     
    </div>
  );
};

export default Cors;
