import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import {Container, Tipo, IconView, TipoText, ValorText} from './styles';

export default function HistoricoList({ data }) {
 return (
   <Container>
      <Tipo>
          <IconView tipo={data.tipo}>
              <Icon 
              name="flag"
              color="#FFF" 
              size={20} 
              />
              <TipoText>{data.tipo}</TipoText>
             
          </IconView>
          <IconView>
           <TipoText>{data.valor}</TipoText>
          
           </IconView>

          
      </Tipo>
   </Container>
  );
}