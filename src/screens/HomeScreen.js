import React from 'react';
import { View, Text, Button } from 'react-native';
import global from '../styles/global';

export default function HomeScreen({ navigation, setIsLoggedIn }) {
    return (
        <View style={global.container}>
            <Text style={global.title}>Bem-vindo à Pesquisa!</Text>
            <Button title="Ir para o Mapa" onPress={() => navigation.navigate('Map')} />
            <Button title="Logout" onPress={() => setIsLoggedIn(false)} />
        </View>
    );
}
