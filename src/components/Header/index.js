import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

import {Container, ButtonMenu} from './styles';

export default function Header() {
 const navigation = useNavigation();

 return (
   <Container>
       <ButtonMenu onPress={ () => navigation.toggleDrawer() }>
         <Icon name="menu" color="#8B008B" size={30} />
       </ButtonMenu>
   </Container>
  );
}