import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useEffect, useState, useContext } from 'react';
import UserContext from '../../context/UserContext/UserContext';

export default function Orgs() {
  const [usuarioAtual] = useContext(UserContext);
  const [orgs, setOrgs] = useState();  
  useEffect(() => {
    
    fetch(usuarioAtual.organizations_url)
    .then((response)=>response.json())
    .then(data=>{setOrgs(data)})
    .catch((error) => {console.log(error)});
  }, [])

  return (
    <View style={styles.container}>      
      {
        orgs === [] ? orgs.map((org)=><Text>{org}</Text>) : <Text>Sem organizações disponíveis.</Text>
      }
     </View>
  );
}
const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})