import React from 'react';
import { useState, useEffect, useContext } from 'react';
import { SafeAreaView, View, Text, Image, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Entypo';
import IconExit from 'react-native-vector-icons/Ionicons.js';
import Botao from "../../components/Botao";
import UserContext from '../../context/UserContext/UserContext';

export default HomeScreen = () => {
    const urlBase = "https://api.github.com/users/"
    const [inputState, toogleInput] = useState(true);
    const [inputText, setInputText] = useState("");
    const alternarInput = () => toogleInput(!inputState)
    const navigation = useNavigation();

    //Às vezes, esse cara não carrega... Pq? Tbm não posso colocar ele em um useEffect...
    //Depois de muito rodar, vi que era pq não inicializava o estado do usuário com o []. Mas pq isso acontece?
    const [usuarioAtual, setUsuarioAtual, idBusca, mudarIDbusca] = useContext(UserContext);

    function resetarEstados() {
        setInputText('');
        toogleInput(false);
        mudarIDbusca("vicmatteus")
        console.log("resetando usuario")
    }
    function validarInput() {
        if(inputText.length === 0 || inputText.toLowerCase() === usuarioAtual.login.toLowerCase())
        {
            toogleInput();
            return
        }
        mudarIDbusca(inputText)
        
    }
    useEffect( () => {
        console.log("entrou no fetch da homescreen")
        fetch(urlBase + idBusca)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                if (data.message === "Not Found") {
                    console.log("usuario nao encontrado.")
                    Alert.error("Usuario não encontrado.")
                    setInputText("");
                    alternarInputText()
                    return
                }
                console.log("encontrou usuario")
                setUsuarioAtual(data)
                setInputText("");
                alternarInput()
            })
            .catch((error) => {
                Alert.alert("Atenção", "Não foi possível encontrar o usuário informado.");
                setInputText("");
            });
        }, [idBusca]);
        


    return (
        <SafeAreaView style={styles.container}>
            {/* o teclado do input está quebrando tudo - depois de mto bater cabeça, vi que era o flex.*/}
            {inputState ? (
                <View style={styles.containerTeclado}>
                    <TextInput style={styles.textInput} value={inputText} onChangeText={setInputText} onSubmitEditing={()=>{validarInput()}} placeholder='Digite o usuário'/>
                    <TouchableOpacity style={styles.confirmSearchButton} onPress={() => { /*Alert.alert(inputText)*/validarInput() }}>
                        <Icon name="magnifying-glass" color='black' size={25} />
                    </TouchableOpacity>
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
        </SafeAreaView >
    );
};

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: '#f6f9fd',
        padding: 20,
        width: '100%',
        height: 700,
    },
    squareContainer: {
        alignItems: 'center',
        marginTop: '5%',
        flex: 2,
        justifyContent: 'center',
    },
    containerTeclado:{
        height: 55,
        width: '100%',
        flexDirection: 'row',
        borderWidth: 1,
        borderRadius: 10,
    },
    textInput: {
        left: 0,
        right: 0,
        marginTop: 10,
        marginBottom: 10,
        padding: 10,
        textAlign: "left",
        fontSize: 16,
        width:"90%",
    },
    confirmSearchButton:{
        justifyContent: 'center',
        alignItems: 'center',
        width:"10%",
    },
    imageContainer: {
        width: '40%',
        height: '60%',
        borderRadius: 50,
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
        justifyContent: 'center', 
    },
    bordaBotoes: {
        height: '80%',
        borderBottomColor: "black",
        justifyContent: 'center', 
    },
    botaoResetContainer: {
        flex: 0.5,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 10,
        backgroundColor: "white",
        justifyContent: 'center',
        alignItems: "center",
    },
    botaoReset: {
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