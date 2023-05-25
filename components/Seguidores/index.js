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
                setListFollowers(data)
            }
        })
    }, [])
    return (
    <View style={styles.container}>
        <ScrollView style={styles.scrollView}>
            {
                listFollowers.map((follower, index)=>{
                    return <ItemFollower key={index} 
                        nome={follower.login} 
                        urlFollower={follower.url} 
                        avatarFollower={follower.avatar_url}/>
                })
            }
        </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center',
    backgroundColor: '#f6f9fd',
  },
  scrollView: {
    flex: 1,
  },
})

