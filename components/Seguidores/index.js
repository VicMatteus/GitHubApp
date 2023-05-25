import React from 'react';
import { View, Text } from 'react-native';
import { useState, useEffect } from 'react'

export default function Seguidores() {

    const [listFollowers, setListFollowers] = useState([])
    
    useEffect(() => {
        fetch('https://api.github.com/users/ronaldaraujo/followers')
        .then((response) => response.json())
        .then((data) => setListFollowers(data))
    }, [])

    return (
    <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
            {
                //verificar se data tá vazio e mostrar lista de seguidores caso tenha. Caso não, só digo que não tem.
                
            }
        </ScrollView>
    </SafeAreaView>
  );
}
