import React from 'react';
import { View, Text, Image, TouchableOpacity, Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Entypo';
import IconExit from 'react-native-vector-icons/Ionicons.js';
import Botao from "./components/Botao/index.js";

const Stack = createStackNavigator();

const DATA = [
  { id: '1', icon: 'icon1', buttonText: 'Botão 1', description: 'Descrição 1', page: 'Page1' },
  { id: '2', icon: 'icon2', buttonText: 'Botão 2', description: 'Descrição 2', page: 'Page2' },
  { id: '3', icon: 'icon3', buttonText: 'Botão 3', description: 'Descrição 3', page: 'Page3' },
  { id: '4', icon: 'icon4', buttonText: 'Botão 4', description: 'Descrição 4', page: 'Page4' },
];

const HomeScreen = ({ navigation }) => {
  
    return (
    <View style={styles.container}>
        <View style={styles.squareContainer}>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={require('./assets/favicon.png')} />
                <TouchableOpacity style={styles.searchButton}>
                    <Icon name="magnifying-glass" color='white' size={25}/>
                </TouchableOpacity>
            </View>
            <Text style={styles.name}>Nome</Text>
            <Text style={styles.subname}>Nome Menor</Text>
        </View>

        <View style={styles.botoes}>
            <Botao label="Bio" description="Um pouco sobre o usuário"/>
            <Botao label="Orgs" description="Organizações que o usuário faz parte"/>
            <Botao label="Repositório" description="Lista contendo todos os repositórios"/>
            <Botao label="Seguidores" description="Lista de seguidores"/>
        </View>

        <TouchableOpacity style={styles.botaoReset} onPress={() => {}}>
            <IconExit name="exit-outline" color='#000038' size={25}/>
            <Text style={styles.name}>Resetar</Text>
        </TouchableOpacity>

    </View>
  );
};

const Page1Screen = () => (
  <View style={styles.pageContainer}>
    <Text style={styles.pageText}>Página 1</Text>
  </View>
);

const Page2Screen = () => (
  <View style={styles.pageContainer}>
    <Text style={styles.pageText}>Página 2</Text>
  </View>
);

const Page3Screen = () => (
  <View style={styles.pageContainer}>
    <Text style={styles.pageText}>Página 3</Text>
  </View>
);

const Page4Screen = () => (
  <View style={styles.pageContainer}>
    <Text style={styles.pageText}>Página 4</Text>
  </View>
);

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Page1" component={Page1Screen} />
        <Stack.Screen name="Page2" component={Page2Screen} />
        <Stack.Screen name="Page3" component={Page3Screen} />
        <Stack.Screen name="Page4" component={Page4Screen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  squareContainer: {
    alignItems: 'center',
    marginTop: '5%',
    flex: 2,
    justifyContent: 'center',
  },
  imageContainer: {
    width: '40%',
    height: '50%',
    borderRadius: 50,
    // borderWidth: 2,
    // borderColor: 'black',   // Adicionar borda preta
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
    justifyContent: 'space-evenly',
  },
  botaoReset:{
    flex:1/2,
    flexDirection: 'row',
    backgroundColor:"brown",
    justifyContent: 'flex-start',
    alignItems: 'center',
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