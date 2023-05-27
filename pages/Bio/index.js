import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { useEffect, useState, useContext } from 'react';
import UserContext from '../../context/UserContext/UserContext';

export default function Bio() {
  const [usuarioAtual] = useContext(UserContext)
  // const [respostaApi, setRespostaApi] = useState();
  // const urlBase = "https://api.github.com/users"

  useEffect(()=>{
    //Não necessário pois ele já traz da tela inicial.
    // fetch(urlBase+usuarioAtual.Bio)
    // .then(response => response.json())
    // .then(data => {
    //   setRespostaApi(data.bio)
    //   // console.log(data)
    // })
    // .catch(() => setRespostaApi("ERRO"));

  },[])

  return ( 
    <View style={styles.container}>
      <Text style={[styles.aspas, styles.aspaIni]}>❝</Text>
      <Text>{usuarioAtual.bio}</Text>
      <Text style={[styles.aspas, styles.aspaFim]}>❞</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  aspas:{
    fontSize:50,
  },
  container: {
    height:"100%",
    justifyContent: 'center',
    alignItems:'center',
    // backgroundColor:"brown",
  },
  aspaIni:{
    left: "-40%",
  },
  aspaFim:{
    left: "40%",
  },

})