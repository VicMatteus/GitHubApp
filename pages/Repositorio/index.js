import React from 'react';
import { useContext, useEffect, useState } from 'react';
import { View, Text, Alert, StyleSheet, ScrollView } from 'react-native';
import UserContext from '../../context/UserContext/UserContext';
import ItemRepositorio from '../../components/ItemRepositorio';

export default function Repositorio() {
    const [usuarioAtual, setUsuarioAtual] = useContext(UserContext);
    const [repository, setRepository] = useState([])

    useEffect(() => {
        fetch(usuarioAtual.repos_url)
            .then((response) => response.json())
            .then((data) => {
                setRepository(data)
            })
            .catch((error) => {
                console.log(error)
                Alert.alert("Erro ao buscar repositórios.")
            });
    }, []);

    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <ItemRepositorio nome={"repo.EXEMPLO"} isPrivate={true} description={"repo.description"} created_at={"repo.createdAt"} html_url={"repo.html_url"}/>
                <ItemRepositorio nome={"repo.EXEMPLO"} isPrivate={false} description={"repo.description"} created_at={"repo.createdAt"} html_url={"repo.html_url"}/>
                
                {
                    repository.map((repo, index)=>{
                        return <ItemRepositorio
                        key={index}
                        nome={repo.name}
                        isPrivate={repo.isPrivate}
                        description={repo.description}
                        created_at={repo.createdAt}
                        html_url={repo.html_url}
                        />
                    })
                }
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f6f9fd',
    },
    scrollView: {
        flex: 1,
    },
})