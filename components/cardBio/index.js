import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const CardBio = ({ valor, legenda, styleType }) => {
    if (styleType === 'linha2') {
        estilos = [styles.numerosContainer]
        valor.toString().length>=5 ? estilos.push(styles.numerosGrandes) : null;
        return (
            <View style={[styles.linha, styles.lineContainer, styles.numeros]}>
                <Text style={estilos}>{valor}</Text>
                <Text style={styles.legenda}>{legenda}</Text>
            </View>
        )
    }
    if (styleType === 'date') {
        return (
            <View style={[styles.linha, styles.lineContainer]}>
                <Text style={styles.nome}>{valor}</Text>
                <Text style={styles.legenda}>{legenda}</Text>
            </View>
        )
    }
    return (
        <View style={[styles.linha, styles.lineContainer]}>
            <Text style={styles.legenda}>{legenda}</Text>
            <Text style={styles.nome}>{valor}</Text>
        </View>
    )
}

export default CardBio

const styles = StyleSheet.create({
    coluna: {
        width: "50%",
        height: "100%",
    },
    coluna1: {
        backgroundColor: "red",
    },
    coluna2: {
        backgroundColor: "green",
    },
    linha: {
        height: "25%",
        margin: 10,
    },
    lineContainer: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(194, 194, 194, 0.477)",
        borderRadius: 8,
        shadowColor: '#000000',
        shadowOpacity: 10,
        shadowOffset: {
            width: 2,
            height: 9,
        }

    },
    numeros: {
        height: "30%",
    },
    numerosContainer: {
        fontSize: 72,
        fontWeight: "bold",
        textDecorationLine: "underline",
    },
    numerosGrandes:{
        fontSize:56,
    },
    nome: {
        fontFamily: "monospace",
        fontSize: 36,
    },
    legenda: {
        fontSize: 20,
        color: '#515151',
        textAlign: 'center',
    },
})