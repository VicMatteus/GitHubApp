import { View, KeyboardAvoidingView, TouchableWithoutFeedback, StyleSheet, TextInput, Keyboard } from 'react-native'
import React from 'react'

// @Deprecated
const PaginaDePesquisa = () => {
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.containerTeclado}>
                    <TextInput style={styles.textInput} placeholder='Digite o usuário' ></TextInput>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView >
    )
}
export default PaginaDePesquisa

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 20,
    },
    containerTeclado:{
        height: 150,
        width: '100%',
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
})