import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useEffect, useState, useContext } from 'react';
import UserContext from '../../context/UserContext/UserContext';
import CardBio from '../../components/cardBio';

export default function Bio() {
    const [usuarioAtual] = useContext(UserContext)
    function montarData()
    {
        
        if (!usuarioAtual.created_at) {
            return "--/--/--";
        }
        let data = new Date(usuarioAtual.created_at);
        let dataEntrada = zeroEsquerda(data.getDate())
                        +'/'+
                        zeroEsquerda(data.getMonth())
                        +'/'+
                        data.getFullYear()
        return dataEntrada
    }
    const zeroEsquerda = (numero) => (numero <= 9) ? ("0" + numero) : numero

    return (
        <View style={styles.containerRoot}>
            <View style={styles.containerColunas}>
                <View style={[styles.coluna, styles.coluna1]}>
                    <CardBio valor={usuarioAtual.name} legenda={"Este é"} styleType={"name"}/>
                    <CardBio valor={usuarioAtual.following} legenda={"Seguindo"} styleType={"linha2"}/>
                    <CardBio valor={montarData()} legenda={"Ingressou na rede"} styleType={"date"}/>
                    

                </View>
                <View style={[styles.coluna, styles.coluna2]}>
                    <CardBio valor={usuarioAtual.location===null?"Só Deus sabe":usuarioAtual.location} legenda={"Localização"} styleType={"name"}/>
                    <CardBio valor={usuarioAtual.followers} legenda={"Seguidores"} styleType={"linha2"}/>
                    <CardBio valor={usuarioAtual.public_repos} legenda={"Repositórios públicos"} styleType={"repo"}/>
                </View>
            </View>
            <View style={styles.containerBio}>
                <Text style={[styles.aspas, styles.aspaIni]}>❝</Text>
                <Text style={styles.bio}>{usuarioAtual.bio}</Text>
                <Text style={[styles.aspas, styles.aspaFim]}>❞</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({

    containerRoot:{
        flex: 1,
        backgroundColor: 'white',
    },
    containerColunas:{
        flexDirection: 'row',
        flex:1,
    },
    //tá no card
    coluna:{
        width: "50%",
        height: "100%",
        justifyContent: 'center',
    },
    coluna1:{
        // backgroundColor: "red",
    },
    coluna2:{
        // backgroundColor: "green",
    },
    linha:{
        height: "25%",
        margin: 10,
    },
    lineContainer:{
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(255, 255, 255, 0.7)",
        borderRadius: 8,
        shadowColor: '#000000',
        shadowOpacity: 10,
        shadowOffset: {
          width: 2,
          height: 9,
        }
        
    },
    numeros:{
        height: "30%",
    },
    numerosContainer:{
        fontSize:72,
        fontWeight: "bold",
        textDecorationLine: "underline",
    },
    nome:{
        fontFamily: "monospace",
        fontSize:36,
    },
    legenda:{
        fontSize:20,
        color: '#515151',

    },
    //
    containerBio: {
        height: "25%",
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:"rgba(194, 194, 194, 0.477)",
        borderRadius: 10,
        margin: 10,
    },
    bio:{
        fontSize:14,
    },
    aspas: {
        fontSize: 50,
    },
    aspaIni: {
        left: "-40%",
    },
    aspaFim: {
        left: "40%",
    },

})