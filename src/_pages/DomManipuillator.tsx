import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
margin-top: 10px;
display: flex;
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

const DomManipullator: React.FC = () => {
  return (
    <div>
      <Container>
        <Title>
          Como o REACT manipula o dom?
        </Title>
        <Wrapper>
          No React, cada parte da interface do usuário é um componente e cada componente possui um estado.
          O React segue o padrão observável e escuta as mudanças de estado. Quando o estado de um componente muda,
          o React atualiza a árvore virtual DOM. Depois que o DOM virtual for atualizado, o React compara a versão atual do DOM virtual com a versão anterior do DOM virtual.
          Este processo é chamado de “diffing”.
        </Wrapper>
        <Wrapper>
          Uma vez que o React sabe quais objetos virtuais do DOM foram alterados, então o React atualiza apenas esses objetos, no DOM real.
          Isso torna o desempenho muito melhor quando comparado à manipulação direta do DOM real.
          Isso faz com que o React se destaque como uma biblioteca JavaScript de alto desempenho.
        </Wrapper>
        <Wrapper>
          Em palavras simples, você diz ao React em qual estado você deseja que a interface do usuário esteja e isso garante que o DOM corresponda a esse estado.
          O grande benefício aqui é que, como desenvolvedor,
          você não precisa saber como a manipulação de atributos, manipulação de eventos ou atualizações manuais do DOM acontecem nos bastidores.
        </Wrapper>
        <img src="https://miro.medium.com/max/720/0*_C52yYMRTDuMtdBA" alt="img"/>
      </Container>
     
    </div>
  );
};

export default DomManipullator;
