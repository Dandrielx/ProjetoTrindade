import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';
import MapScreen from '../screens/MapScreen';
import LoginScreen from '../screens/LoginScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <NavigationContainer>
            {isLoggedIn ? (
                // Rotas privadas (usuário autenticado)
                <Stack.Navigator screenOptions={{ headerShown: true }}>
                    <Stack.Screen name="Home">
                        {(props) => <HomeScreen {...props} setIsLoggedIn={setIsLoggedIn} />}
                    </Stack.Screen>
                    <Stack.Screen name="Map" component={MapScreen} />
                </Stack.Navigator>
            ) : (
                // Rotas públicas (login)
                <Stack.Navigator screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="Login">
                        {(props) => <LoginScreen {...props} setIsLoggedIn={setIsLoggedIn} />}
                    </Stack.Screen>
                </Stack.Navigator>
            )}
        </NavigationContainer>
    );
}

