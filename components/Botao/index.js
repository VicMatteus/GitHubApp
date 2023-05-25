import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native';

//Função do botão em linha que lida com os cliques
export default function Botao({label, description, navigationDestiny}) {
    const navigation = useNavigation();
    const navigateTo = () => {navigation.navigate(navigationDestiny)}
    
    
    //Tratar ícones baseado no lable.
    let iconName = ""
    let estilo = [styles.container]
    switch(label) {
        case 'Bio':
          iconName = "person-outline"
          estilo.push(styles.top)
        break;
        case 'Orgs':
          iconName = "headset-outline"
        break;
        case 'Repositório':
          iconName = "document-text-outline"
        break;
        case 'Seguidores':
          iconName = "happy-outline"
          estilo.push(styles.bottom)
        break;
        default:
          iconName = "alert-outline"
      }

    return (
    //Conteiner em linha com 3 colunas.
    <View style={[estilo]}>
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
        backgroundColor:"white",
        borderColor:"#edf2f8",
        borderWidth:1,
        height:"25%",        
    },
    top:{
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
    },
    bottom:{
        borderBottomLeftRadius:10,
        borderBottomRightRadius:10,
        
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
        borderWidth:1,
        borderRadius:10,
        borderColor: '#edf2f8'
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