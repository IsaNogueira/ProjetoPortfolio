import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import {Container, Tipo, IconView, TipoText, ValorText} from './styles';

export default function expHistoric({ data }) {
 return (
   <Container>
      <Tipo>
          <IconView tipo={data.experiencia}>
              <Icon 
              name="flag"
              color="#FFF" 
              size={20} 
              />
              <TipoText>{data.experiencia}</TipoText>
             
          </IconView>
          <IconView>
           <TipoText>{data.experiencia}</TipoText>
          
           </IconView>

          
      </Tipo>
   </Container>
  );
}