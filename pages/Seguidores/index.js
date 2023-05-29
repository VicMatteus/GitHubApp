import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { useState, useEffect, useContext } from 'react'
import ItemFollower from '../../components/ItemFollower';
import UserContext from '../../context/UserContext/UserContext';

export default function Seguidores() {

    const [usuarioAtual] = useContext(UserContext);
    const [listFollowers, setListFollowers] = useState([])

    useEffect(() => {
        console.log(usuarioAtual.followers_url);
        fetch(usuarioAtual.followers_url)
            .then((response) => response.json())
            .then((data) => {
                if (data.length > 0) {
                    setListFollowers(data)
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }, [])
    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollView}>
                {
                    listFollowers.map((follower, index) => {
                        return <ItemFollower key={index}
                            nome={follower.login}
                            urlFollower={follower.url}
                            avatarFollower={follower.avatar_url} />
                    })
                }
            </ScrollView>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#f6f9fd',
    },
    scrollView: {
        flex: 1,
    },
})

