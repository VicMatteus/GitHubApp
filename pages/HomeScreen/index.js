import React from 'react';
import { useState, useEffect, useContext } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import IconExit from 'react-native-vector-icons/Ionicons.js';
import Botao from "../../components/Botao";
import UserContext from '../../context/UserContext/UserContext';

export default HomeScreen = () => {
    const urlBase = "https://api.github.com/users"
    const [inputState, toogleInput] = useState(false);
    const [inputText, setInputText] = useState("");
    const alternarInput = () => toogleInput(!inputState)

    //Às vezes, esse cara não carrega... Pq? Tbm não posso colocar ele em um useEffect...
    //Depois de muito rodar, vi que era pq não inicializava o estado do usuário com o []. Mas pq isso acontece?
    const [usuarioAtual, setUsuarioAtual, idBusca, mudarIDbusca] = useContext(UserContext);

    function resetarEstados() {
        mudarIDbusca("/vicmatteus")
        console.log("resentando usuario")
    }

    useEffect( () => {
        fetch(urlBase + idBusca)
            .then(response => response.json())
            .then(data => {
                setUsuarioAtual(data)
            })
            .catch(error => {
                console.log("Erro na consulta.")
            });
        }, [idBusca]);
        

    return (
        // <KeyboardAvoidingView
        // behavior={Platform.OS === 'ios' ? 'padding' : 'padding'}
        // style={styles.container}>
            <View style={styles.containerConteudo}>
                {/* o teclado do input está quebrando tudo */}
                {inputState ? (
                <View style={styles.containerTeclado}>
                    <TextInput style={styles.textInput} placeholder='Digite o usuário' ></TextInput>
                </View>
                ) : <></>}
                
                <View style={styles.squareContainer}>
                    <View style={styles.imageContainer}>

                        <Image style={styles.image} src={usuarioAtual.avatar_url} />
                        <TouchableOpacity style={styles.searchButton} onPress={() => { alternarInput() }}>
                            <Icon name="magnifying-glass" color='white' size={25} />
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.name}>{usuarioAtual.name}</Text>
                    <Text style={styles.subname}>@{usuarioAtual.login}</Text>
                </View>

                <View style={styles.botoes}>
                    <View style={styles.bordaBotoes}>
                        <Botao label="Bio"
                            description="Um pouco sobre o usuário"
                            navigationDestiny={"Bio"}
                        />
                        <Botao label="Orgs"
                            description="Organizações que o usuário faz parte"
                            navigationDestiny={"Orgs"}
                        />
                        <Botao label="Repositório"
                            description="Lista contendo todos os repositórios"
                            navigationDestiny={"Repositorio"}
                        />
                        <Botao label="Seguidores"
                            description="Lista de seguidores"
                            navigationDestiny={"Seguidores"}
                        />
                    </View>
                </View>

                <TouchableOpacity style={styles.botaoResetContainer} onPress={resetarEstados}>
                    <View style={styles.botaoReset}>
                        <IconExit name="exit-outline" color='#000038' size={25} />
                        <Text style={styles.textReset}>Resetar</Text>
                    </View>
                </TouchableOpacity>

                {/* </KeyboardAvoidingView> */}
            </View >

    );
};

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: '#f6f9fd',
        padding: 20,
        width: '100%',
        height: '100%',
    },
    containerConteudo:{
        // flex: 1,
        width:"100%",
        height: '100%',
    },
    containerTeclado:{
        height: '12%',
    },
    squareContainer: {
        alignItems: 'center',
        marginTop: '5%',
        flex: 2,
        justifyContent: 'center',
    },
    textInput: {
        flex: 0.3,
        left: 0,
        right: 0,
        margin: 10,
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        textAlign: "center",
        fontSize: 16,
    },
    imageContainer: {
        width: '40%',
        height: '60%',
        borderRadius: 50,
        // borderWidth: 2,
        // borderColor: 'black',  // Adicionar borda preta
        justifyContent: 'center', // Centralizar verticalmente
        alignItems: 'center',     // Centralizar horizontalmente
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 10,
    },
    searchButton: {
        position: 'absolute',
        bottom: 1,
        right: 1,
        backgroundColor: 'black',
        borderRadius: 10,
        padding: 5,
    },
    name: {
        color: 'black',
        fontWeight: 'bold',
        width: '100%',
        textAlign: 'center',
        marginTop: 10,
    },
    subname: {
        color: 'gray',
        width: '100%',
        textAlign: 'center',
    },
    botoes: {

        flex: 3,
        justifyContent: 'center', //space-evenly
    },
    bordaBotoes: {
        height: '80%',
        borderBottomColor: "black",
        justifyContent: 'center', //space-evenly
    },
    botaoResetContainer: {
        flex: 0.5,
        // flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        // borderColor:"#000038",
        // borderWidth:2,
        borderRadius: 10,
        backgroundColor: "white",
        justifyContent: 'center',
        alignItems: "center",
    },
    botaoReset: {
        // flex:1/2,
        width: "90%",
        height: "90%",
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: "#000038",
        borderWidth: 2,
        borderRadius: 10,
        backgroundColor: "white",

    },
    textReset: {
        left: 8,
        fontSize: 20,
    },
    pageContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    pageText: {
        fontSize: 24,
        fontWeight: 'bold',
    },
});