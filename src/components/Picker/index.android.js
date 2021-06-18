import React from 'react';

// Use npm install @react-native-picker/picker
import { Picker as RNPickerSelect } from '@react-native-picker/picker';
import { PickerView } from './styles';

export default function Picker({ onChange, tipo }){
    return(
        <PickerView>
            <RNPickerSelect
            style={{
                width:'100%'
            }}
            selectedValue={tipo}
            onValueChange={ (valor) => onChange(valor) }
            >
              <RNPickerSelect.Item label="Desenvolvedor(a)" value="Desenvolvedor" />  
              <RNPickerSelect.Item label="Engenheiro(a)" value="Engenheiro" />
              <RNPickerSelect.Item label="Scrum Master" value="Scrum Master" />
              <RNPickerSelect.Item label="Gerente de Engenharia" value="Gerente" />  
            </RNPickerSelect>
        </PickerView>
    )
}