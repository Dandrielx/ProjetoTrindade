import React from 'react';
import { View, Text, Button, TextInput, TouchableOpacity } from 'react-native';
import global from '../styles/global';

export default function LoginScreen({ navigation, setIsLoggedIn }) {
    return (
        <View style={global.container}>
            <Text style={global.title}>Faça o login em sua conta</Text>
            <TextInput placeholder="Email" style={global.input} />
            <TextInput placeholder="Senha" secureTextEntry style={global.input} />
            <Button title="Login" onPress={() => setIsLoggedIn(true)} />
            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                <Text style={{ color: '#007AFF', marginTop: 20, textAlign: 'center' }}>
                    Não tem conta? Cadastre-se
                </Text>
            </TouchableOpacity>

        </View>
    );
}
