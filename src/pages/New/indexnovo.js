import React, { useState } from 'react';
import { SafeAreaView, Keyboard, TouchableWithoutFeedback} from 'react-native';

import Header from '../../components/Header';
import Picker from '../../components/Picker/styles';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
export default function New() {
 const [valor, setValor] = useState('');
 const [tipo, setTipo] = useState('receita');

 return (
   <TouchableWithoutFeedback onPress={ () => Keyboard.dismiss() }>
   <View>
       <Header/>

       <SafeAreaView style={{ alignItems: 'center' }}>
         <TextInput
         placeholder="Valor desejado"
         returnKeyType="next"
         onSubmitEditing={ () => Keyboard.dismiss() }
         value={valor}
         onChangeText={ (text) => setValor(text) }
         />
         
         <Picker onChange={setTipo} tipo={tipo} />

        <TouchableOpacity>
          <SubmitText>Registrar</SubmitText>
        </TouchableOpacity>

       </SafeAreaView>

   </View>
   </TouchableWithoutFeedback>
  );
}