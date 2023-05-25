import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native';

//Função do botão em linha que lida com os cliques
export default function ItemFollower({nome, urlFollower, avatarFollower}) {
    const navigation = useNavigation();
    const navigateTo = () => {navigation.navigate(navigationDestiny)}

    return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.touchable} onPress={()=>{}}>
            <View style={styles.icone}>
                {/* <Icon name="person-outline" size={25} color={"#000038"}/> */}
                <Image style={styles.image} src={avatarFollower} />
            </View>
            <View style={styles.containerNome}>
                <Text style={styles.nome}>{nome}</Text>
                <Text style={styles.descricao}>{urlFollower}</Text>
            </View>

        </TouchableOpacity>
     </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        borderWidth:1,
        borderRadius:10,
        height:100,  
        backgroundColor:"white",
        margin:10,
    },
    touchable:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width:"100%",
        height:"100%",
        borderRadius:10,
    },
    icone:{
        width:"25%" ,
        height:"70%" ,
        justifyContent: 'center',
        alignItems: 'center',
        left:5,
        // borderWidth:2,
        // borderRadius:10,
        // backgroundColor: '#e80000',

    },
    containerNome:{
        flexDirection: 'column',
        width: "70%",
        height:"100%",
        left: 12,
        justifyContent: 'center',
    },
    nome:{
        fontWeight:"bold",
        color:"#000038",
        fontSize:24,
    },
    descricao: {
        fontSize:12,
        color:"grey",
    },
})