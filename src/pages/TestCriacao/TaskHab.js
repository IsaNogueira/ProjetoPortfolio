import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

export default function TaskList({data, deleteItem, editItem}) {
 return (
  <View >
     
    <View style={styles.container}>
 
    <TouchableOpacity onPress={()=> deleteItem(data.key)}>
    <Icon name="trash" color ="#8B008B" size={20} />
    </TouchableOpacity>

    <TouchableWithoutFeedback onPress={()=> editItem(data)}>
      <Text style={{color:'#8B008B', paddingRight:10, fontSize:18, fontWeight:'bold'}}>{data.habilidade}</Text>
      </TouchableWithoutFeedback>
    </View>
    
  </View>
  );
}

const styles = StyleSheet.create({
container:{
    flex:1,
    flexDirection:'row',
    backgroundColor:'#1212',
    alignItems:'center',
    marginBottom: 10,
    padding:10,
    borderRadius:5,
    fontSize:20,
    fontWeight:'bold'
}
});