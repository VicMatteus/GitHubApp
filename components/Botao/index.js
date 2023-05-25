import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'

//Função do botão em linha que lida com os cliques
export default function Botao({label, description}) {
    let iconName = ""

    //Tratar ícones baseado no lable.
    switch(label) {
        case 'Bio':
          iconName = "person-outline"
        break;
        case 'Orgs':
          iconName = "headset-outline"
        break;
        case 'Repositório':
          iconName = "document-text-outline"
        break;
        case 'Seguidores':
          iconName = "happy-outline"
        break;
        default:
          iconName = "alert-outline"
      }

    return (
    //Conteiner em linha com 3 colunas.
    <View style={styles.container}>
        <TouchableOpacity style={styles.touchable}>
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
        borderBottomColor:"black",
        borderWidth:2,
        borderRadius:10,
        height:"20%",        
    },
    touchable:{
        flexDirection: 'row',
    },
    icone:{
        width:"15%" ,
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerNome:{
        flexDirection: 'column',
        width: "70%",
        height:"100%",
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