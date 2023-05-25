import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native';

//Função do botão em linha que lida com os cliques
export default function ItemFollower({nome, idFollower}) {
    const navigation = useNavigation();
    const navigateTo = () => {navigation.navigate(navigationDestiny)}

    return (
    //Conteiner em linha com 2 colunas.
    <View style={styles.container}>
        <TouchableOpacity style={styles.touchable} onPress={navigateTo}>
            <View style={styles.icone}>
                <Icon name={iconName} size={25} color={"#000038"}/>
            </View>
            <View style={styles.containerNome}>
                <Text style={styles.nome}>{label}</Text>
                <Text style={styles.descricao}>{description}</Text>
            </View>
            <View style={styles.containerReturn}>
                <Icon name="chevron-forward" size={25} color={"#000038"}/>
            </View>
        </TouchableOpacity>
     </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',

        borderWidth:1,
        height:"25%",        
    },
    touchable:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    icone:{
        width:"15%" ,
        height:"70%" ,
        justifyContent: 'center',
        alignItems: 'center',
        left:5,
        borderWidth:2,
        borderRadius:10,
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
    containerReturn:{
        justifyContent: 'center',
        alignItems:"center",
        width:'15%',
        
    },

})