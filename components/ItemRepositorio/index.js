import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native';

//Componente que reprenta um item da lista apresentada nos repositorios
export default function ItemRepositorio({nome, isPrivate, description, created_at, html_url}) {
    const navigation = useNavigation();
    const navigateTo = () => {navigation.navigate(navigationDestiny)}

    function dataCriacao() {
        let data = new Date(created_at)
        console.log( data.getDay()+"/"+data.getMonth()+"/"+data.getFullYear())
    }

    return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.touchable} onPress={()=>{}}>
            <View style={styles.icone}>
                <Icon name="folder-open-outline" size={25} color={"#000038"}/>
            </View>
            <View style={styles.containerNome}>
                <Text style={styles.nome}>{nome}</Text>
                <Text style={styles.descricao}>Criado em {created_at ? dataCriacao() : "--/--/--"}</Text>
                <Text style={styles.descricao}>Descrição: {description ? description : "~Sem descrição~"}</Text>
            </View>
            <View style={styles.privado}>
                <Icon name={isPrivate ? "lock-closed-outline" : "lock-open-outline"} size={25} color={"#000038"}/>
            </View>
        </TouchableOpacity>
     </View>
  );
}

const styles = StyleSheet.create({
    container:{
        heigth:10,
        flexDirection: 'row',
        borderWidth:1,
        borderRadius:10,
        height:100,  
        backgroundColor:"white",
        margin:10,
    },
    touchable:{
        width:"100%",
        height:"100%",
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',        
    },
    dataCriacao:{
        fontSize:12,
        color:"grey",
    },
    icone:{
        width:"20%" ,
        height:"100%" ,
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerNome:{
        flexDirection: 'column',
        width: "60%",
        height:"100%",
        left: 12,
        justifyContent: 'center',
    },
    privado:{
        width:"20%",
        height:"100%",
        justifyContent: 'center',
        alignItems: 'center',
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