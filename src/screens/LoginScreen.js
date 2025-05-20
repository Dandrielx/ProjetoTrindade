import React from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import global from '../styles/global';

export default function LoginScreen({ setIsLoggedIn }) {
    return (
        <View style={global.container}>
            <Text style={global.title}>Faça o login em sua conta</Text>
            <TextInput placeholder="Email" style={global.input} />
            <TextInput placeholder="Senha" secureTextEntry style={global.input} />
            <Button title="Login" onPress={() => setIsLoggedIn(true)} />
        </View>
    );
}
