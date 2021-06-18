import React, { useContext }  from 'react';
import { useNavigation } from '@react-navigation/native';
import Header from '../../components/Header';

import { AuthContext } from '../../contexts/auth';

import {Container, Nome, NewLink, NewText, Logout, LogoutText} from './styles';

export default function Portfolioo() {
 const navigation = useNavigation();

 const { user} = useContext(AuthContext);

 return (
   <Container>
      <Header/>
       <Nome>
         {user && user.nome}      
       </Nome>
       <Nome>
           Experiências
       </Nome>
         <NewText>Estágio na Empresa X</NewText>  

         <Nome>
           Habilidades
       </Nome>
         <NewText>JAVA HTML CSS</NewText> 

         <Nome>
           Competências
       </Nome>
         <NewText>Tentar programar</NewText> 
   </Container>
  );
}