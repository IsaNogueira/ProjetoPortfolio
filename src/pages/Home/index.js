import React, { useContext, useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import firebase from '../../services/firebaseConnection';
import { format } from 'date-fns';

import { AuthContext } from '../../contexts/auth';
import Header from '../../components/Header';
import HistoricoList from '../../components/HistoricoList';
import expHistoric from '../../components/HistoricoList/expHistoric';
import { Background, Container, Nome, Saldo, Title, List} from './styles';

export default function Home() {
  const [historico, setHistorico] = useState([]);
  const [historicoEx, setHistoricoEx] = useState([]);
  const [saldo, setSaldo] = useState(0);

  const { user } = useContext(AuthContext);
  const uid = user && user.uid;

  useEffect(()=>{
    async function loadList(){
      await firebase.database().ref('users').child(uid).on('value', (snapshot)=>{
        setSaldo(snapshot.val().saldo);
      });

      /* await firebase.database().ref('experiencias').on('value',(snapshot)=>{
        setHistorico([]);
        snapshot.forEach((childItem) => {
          let listExp = {
            key: childItem.key,
            experiencia: childItem.val().experiencia
          };
          setHistorico(oldArray => [...oldArray, listExp].reverse());
      }) */

      await firebase.database().ref('historico')
      .child(uid)
      .orderByChild('date').equalTo(format(new Date, 'dd/MM/yy'))
      .limitToLast(10).on('value', (snapshot)=>{
        setHistorico([]);

        snapshot.forEach((childItem) => {
          let list = {
            key: childItem.key,
            tipo: childItem.val().tipo,
            valor: childItem.val().valor
          };
          
          setHistorico(oldArray => [...oldArray, list].reverse());
        })
      })

    

    await firebase.database().ref('experiencias')
    .child(uid)
    .limitToLast(10).on('value', (snapshot)=>{
      setHistoricoEx([]);

      snapshot.forEach((childItem)=>{
        let listEx = {
            key: childItem.key,
            experiencia: childItem.val().experiencia
        };

       
        
        setHistoricoEx(oldArray => [...oldArray, listEx].reverse());
      })
    })

    } loadList();
  }, []);


 return (
    <Background>
      <Header/>
      <Container>
        <Nome>{user && user.nome}</Nome>
        <Saldo>Bem-vindo</Saldo>
      </Container>

      <Title>Ultimas atualizações</Title>
      
      <List
      showsVerticalScrollIndicator={false}
      data={historico}
      keyExtractor={ item => item.key}
      renderItem={ ({ item }) => ( <HistoricoList data={item} /> )}
      />

     
    </Background>
  );
}