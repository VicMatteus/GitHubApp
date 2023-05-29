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
export default App;