import React from 'react';
import { useState, useEffect, useContext } from 'react';
import { Text, Image, TextInput, TouchableOpacity, Button, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Bio from "./pages/Bio";
import Orgs from "./pages/Orgs";
import Seguidores from "./pages/Seguidores";
import Repositorio from "./pages/Repositorio";
import UserContext from './context/UserContext/UserContext';
import HomeScreen from './pages/HomeScreen';
import PaginaDePesquisa from './pages/PaginaDePesquisa';

const Stack = createStackNavigator();
//https://api.github.com/users/ronaldaraujo

const App = () => {
    const [usuarioAtual, setUsuarioAtual] = useState([])
    const [idBusca, setIdBusca] = useState("ronaldaraujo")

    function mudarIDbusca(id){setIdBusca(id)};

    return (
        <UserContext.Provider value={[usuarioAtual, setUsuarioAtual, idBusca, mudarIDbusca]}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Home" component={HomeScreen} />
                    <Stack.Screen name="Tela de Pesquisa" component={PaginaDePesquisa} />
                    <Stack.Screen name="Bio" component={Bio} />
                    <Stack.Screen name="Orgs" component={Orgs} />
                    <Stack.Screen name="Repositorio" component={Repositorio} />
                    <Stack.Screen name="Seguidores" component={Seguidores} />
                </Stack.Navigator>
            </NavigationContainer>
        </UserContext.Provider>
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

export default App;