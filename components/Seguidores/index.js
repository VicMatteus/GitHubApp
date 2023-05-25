import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { useState, useEffect } from 'react'
import ItemFollower from '../ItemFollower';


export default function Seguidores() {

    let listaUsers = <Text>Não existem seguidores.</Text>
    const [listFollowers, setListFollowers] = useState([])
    const [listFollowersComponent, setListFollowersComponent] = useState(listaUsers)
    useEffect(() => {
        fetch('https://api.github.com/users/ronaldaraujo/followers')
        .then((response) => response.json())
        .then((data) => {
            setListFollowers(data)
            if (data.length > 0){
                listaUsers = listFollowers.map((follower,key)=>{
                    <ItemFollower key={key} nome={follower.login} urlFollower={follower.url} avatarFollower={follower.avatar_url}/>
                })
                console.log(listaUsers)
                setListFollowers(listaUsers)
            }
        })
    }, [])
    return (
    <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
            {/* {listFollowers} */}
            {
                //verificar se data tá vazio e mostrar lista de seguidores caso tenha. Caso não, só digo que não tem.
                // console.log(listFollowers)
                // listaUsers
            }
        </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {

  },
  scrollView: {
  
  },
})

