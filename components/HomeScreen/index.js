import React from 'react';
import { useState, useContext } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, SafeAreaView, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import IconExit from 'react-native-vector-icons/Ionicons.js';

const HomeScreen = () => {
    const [inputState, toogleInput] = useState(false);
    const [userAtual, setUserAtual] = useState();
    const alternarInput = () => toogleInput(!inputState)

    //Às vezes, esse cara não carrega... Pq? Tbm não posso colocar ele em um useEffect...
    const usuarioAtual = useContext(UserContext);

    return (
        <SafeAreaView style={styles.container}>
            {/* o teclado do input está quebrando tudo */}
            {inputState ? <TextInput style={styles.textInput} placeholder='Digite o usuário'></TextInput> : <></>}
            <View style={styles.squareContainer}>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} src={usuarioAtual.avatar_url} />
                    <TouchableOpacity style={styles.searchButton} onPress={() => { alternarInput() }}>
                        <Icon name="magnifying-glass" color='white' size={25} />
                    </TouchableOpacity>
                </View>
                <Text style={styles.name}>Nome</Text>
                <Text style={styles.subname}>Nome Menor</Text>
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

            <TouchableOpacity style={styles.botaoResetContainer} onPress={() => { }}>
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
        flex: 1,
        backgroundColor: '#f6f9fd',
        padding: 20,
        width: '100%',
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