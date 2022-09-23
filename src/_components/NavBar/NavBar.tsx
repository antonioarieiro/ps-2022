import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Wrapper = styled.section`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
width: 100%;
max-heigth: 35px;
max-padding: 2em;
heigth: 35px;
background: #D4CFD4;
`;

const TitleLogo = styled.section`
cursor: pointer;
width: 20%;
font-family: Roboto, regular;
color: black;
`;

const Button = styled.h1`
font-size: 14px;
cursor: pointer;
text-align: center;
padding: 6px;
color: black;
&:hover {
  border: solid 1px;
  color: black;
  transition: all 0.3s;
}
`;



const NavBar: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Wrapper>
        <TitleLogo>
          PS-2022 - Antonio Arieiro
        </TitleLogo>
        <Button style={{ 'marginRight': '32px' }}
          onClick={() => { navigate('/') }}
        >
          Hellow Word React
        </Button>
        <Button
          onClick={() => { navigate('/why-to-react-manipullator-dom') }}
        >
          Como o React Manipula o DOM?
        </Button>
      </Wrapper>
    </div>
  );
};

export default NavBar;
