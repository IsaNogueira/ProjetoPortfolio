import React, {useState, useEffect, useRef} from 'react';
import { Keyboard, View,Text, TextInput, TouchableOpacity, StyleSheet, FlatList, ScrollView } from 'react-native';
import firebase from '../../services/firebaseConnection';
import TaskList from './TaskList';
import TaskComp from './TaskComp';
import TaskHab from './TaskHab';
import Header from '../../components/Header';
import Home from '../Home';

export default function TestCriacao() {
    const [newExperiencia, setNewExperiencia] = useState('');
    const [listaExp, setListaExp] = useState([]);
    const [keyExp, setKeyExp] = useState('');

    const [newHabilidade, setNewHabilidade] = useState('');
    const [listaHab, setListaHab] = useState([]);
    const [keyHab, setKeyHab] = useState('');

    const [newCompetencia, setNewCompetencia] = useState('');
    const [listaComp, setListaComp] = useState([]);
    const [keyComp, setKeyComp] = useState('');
    
    const inputRef = useRef('');

        //fazer uma busca no banco para mostrar oq já existe EM EXPERIENCIAS

    useEffect(()=>{
        async function loadListaExp(){
            await firebase.database().ref('experiencias').on('value',(snapshot)=>
            {   
                setListaExp([]);

                snapshot.forEach((childItem)=>{
                    let data = {
                        key: childItem.key,
                        experiencia: childItem.val().experiencia
                    };

                    setListaExp(oldArray => [...oldArray, data])
                })

            })
        }
    loadListaExp();

    },[]);

    //fazer uma busca no banco para mostrar oq já existe EM HABILIDADES

    useEffect(()=>{
        async function loadListaHab(){
            await firebase.database().ref('habilidade').on('value',(snapshot)=>
            {   
                setListaHab([]);

                snapshot.forEach((childItem)=>{
                    let data = {
                        key: childItem.key,
                        habilidade: childItem.val().habilidade
                    };

                    setListaHab(oldArray => [...oldArray, data])
                })

            })
        }
    loadListaHab();

    },[]);

    //fazer uma busca no banco para mostrar oq já existe EM COMPETENCIA
    useEffect(()=>{
        async function loadListaComp(){
            await firebase.database().ref('competencia').on('value',(snapshot)=>
            {   
                setListaComp([]);

                snapshot.forEach((childItem)=>{
                    let data = {
                        key: childItem.key,
                        competencia: childItem.val().competencia
                    };

                    setListaComp(oldArray => [...oldArray, data])
                })

            })
        }
    loadListaComp();

    },[]);
 async function handleExp(){
     if(newExperiencia !=='')
     {
        if(keyExp !== ''){
            await firebase.database().ref('experiencias').child(keyExp).update({
                experiencia: newExperiencia,
            });
            Keyboard.dismiss();
            setNewExperiencia('');
            setKeyExp('');
            return;
        }

        let experiencia = await firebase.database().ref('experiencias');
        
        //gerar uma chave aleatoria
        let chave =  experiencia.push().key;

        experiencia.child(chave).set({
            experiencia: newExperiencia
        });
        Keyboard.dismiss();
        setNewExperiencia('');

     }
 }

 async function handleHab(){
    if(newHabilidade !=='')
    {

        if(keyHab !== ''){
            await firebase.database().ref('habilidade').child(keyHab).update({
                habilidade: newHabilidade,
            });
            Keyboard.dismiss();
            setNewHabilidade('');
            setKeyHab('');
            return;
        }

       let habilidade = await firebase.database().ref('habilidade');
       
       //gerar uma chave aleatoria
       let chave =  habilidade.push().key;

       habilidade.child(chave).set({
        habilidade: newHabilidade
       });
       Keyboard.dismiss();
       setNewHabilidade('');

    }
}

async function handleComp(){
    if(newCompetencia !=='')
    {
        if(keyComp !== ''){
            await firebase.database().ref('competencia').child(keyComp).update({
                competencia: newCompetencia,
            });
            Keyboard.dismiss();
            setNewCompetencia('');
            setKeyComp('');
            return;
        }
        

       let competencia = await firebase.database().ref('competencia');
       
       //gerar uma chave aleatoria
       let chave =  competencia.push().key;

       competencia.child(chave).set({
       competencia: newCompetencia
       });
       Keyboard.dismiss();
       setNewCompetencia('');

    }
}

async function handleDelete(key){
    await firebase.database().ref('experiencias').child(key).remove();
    await firebase.database().ref('habilidade').child(key).remove();
    await firebase.database().ref('competencia').child(key).remove();
}

async function handleEdit(data){
    setNewExperiencia(data.experiencia);
    setKeyExp(data.key);

    setNewHabilidade(data.habilidade);
    setKeyHab(data.key);

    setNewCompetencia(data.competencia);
    setKeyComp(data.key);
 
    inputRef.current.focus();
}

 return (
   
   <View style={styles.container}>
       <Header style={styles.header}/>
       <View style={styles.list}>
       <TextInput
       style={styles.input}
       placeholder="Experiencias"
       underlineColorAndroid="transparent"
       onChangeText={(texto)=>setNewExperiencia(texto)}
       value={newExperiencia}
       ref={inputRef}
       />
       <TouchableOpacity  style={styles.button} onPress={handleExp}>
           <Text style={styles.text}>+</Text>
       </TouchableOpacity>
        </View>


       <View style={styles.list}>
       <TextInput
       style={styles.input}
       placeholder="Habilidade"
       underlineColorAndroid="transparent"
       onChangeText={(texto)=>setNewHabilidade(texto)}
       value={newHabilidade}
       />
       <TouchableOpacity  style={styles.button} onPress={handleHab}>
           <Text style={styles.text}>+</Text>
       </TouchableOpacity>
        </View>


        <View style={styles.list}>
       <TextInput
       style={styles.input}
       placeholder="Competencia"
       underlineColorAndroid="transparent"
       onChangeText={(texto)=>setNewCompetencia(texto)}
       value={newCompetencia}
       />
       <TouchableOpacity  style={styles.button} onPress={handleComp}>
           <Text style={styles.text}>+</Text>
       </TouchableOpacity>
        </View>

    <Text style={styles.textoE}>Experiencias</Text>
    <FlatList
    data={listaExp}
    keyExtractor={item=>item.key}
    renderItem={({item})=>(
    <TaskList data={item} 
    deleteItem={handleDelete}
    editItem={handleEdit}
    />
    )}

    />

    <Text style={styles.textoE}>Habilidades</Text>
    <FlatList
    data={listaHab}
    keyExtractor={item=>item.key}
    renderItem={({item})=>(
    <TaskHab data={item}
    deleteItem={handleDelete}
    editItem={handleEdit}
    />
    )}
    />

    <Text style={styles.textoE}>Competencia</Text>
    <FlatList
    data={listaComp}
    keyExtractor={item=>item.key}
    renderItem={({item})=>(
    <TaskComp data={item}
    deleteItem={handleDelete}
    editItem={handleEdit}
    />
    )}
    />

   </View>
  
  );
}

const styles = StyleSheet.create({
textoE:{
    fontWeight:'bold',
    fontSize:20
},
header:{
        color:'#121212'
    },

container:{
    flex:1,
    marginTop:25


},
input:{
flex:1,
marginBottom:10,
padding:10,
borderWidth:1,
borderColor:'#8B008B',
height: 40,

},
list:{
flexDirection:'row',
marginBottom:30
},
button:{
    justifyContent:'center',
    alignItems:'center',
    height: 40,
    backgroundColor:'#8B008B',
    paddingLeft:14,
    paddingRight:14,
    

},
text:{
    fontSize:20,
    color: '#fff',
}
})