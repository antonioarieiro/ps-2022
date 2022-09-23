import React from 'react';
import styled from 'styled-components';
import URL from '../_assets/struct.png'

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

const Struct: React.FC = () => {
  return (
    <div>
      <Container>
        <Title>
         Estrutura 
        </Title>
        <Wrapper>
          A pasta src é onde nós iremos ficar a maior parte do nosso tempo, é onde o código fonte da nossa aplicação vive.
        </Wrapper>
        <Wrapper>
          A pasta public contém arquivos que serão lidos pelo navegador enquanto você desenvolve o aplicativo; o mais importante de todos estes arquivos é o index.html.
          O React irá injetar seu código neste arquivo para que seu navegador possa executá-lo. Existem outras marcações que ajudam o create-react-app a funcionar,
          então cuidado para não editar estas, a não ser que você saiba o que você está fazendo. Você é encorajado a mudar o texto dentro do elemento
          Tile neste arquivo, esta mudança irá refletir no título de sua aplicação. Títulos de páginas precisos são importante para acessibilidade!
          A pasta public também será publicada quando você construir e lançar uma versão de produção de seu aplicativo.
        </Wrapper>
        <Wrapper>
          O arquivo package.json contém informações sobre o nosso projeto, dentre as quais, o nome do projeto e os pacotes instalados.
          O Node.js/npm usa esse aquivo para manter tudo organizado.
          O arquivo package.json não é exclusivo para aplicações em React; o create-react-app simplesmente encarrega-se de criá-lo.
        </Wrapper>
        <img src={URL} alt="img" />
      </Container>

    </div>
  );
};

export default Struct;
