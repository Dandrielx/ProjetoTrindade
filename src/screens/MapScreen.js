import React, { useEffect, useState } from 'react';
import { StyleSheet, View, ActivityIndicator, Alert, TouchableOpacity } from 'react-native';
import MapView, { Marker, Circle } from 'react-native-maps';
import * as Location from 'expo-location';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import styles from '../styles/mapScreenStyles';
import mapStyleLight from '../styles/mapStyleLight';
import mapStyleDark from '../styles/mapStyleDark';

export default function MapScreen() {
    const [location, setLocation] = useState(null);
    const [loading, setLoading] = useState(true);

    const [darkMode, setDarkMode] = useState(false);
    const toggleMapStyle = () => {
        setDarkMode(!darkMode);
    };

    useEffect(() => {
        (async () => {
            const { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                Alert.alert('Permissão negada', 'Permita o acesso à localização para usar o mapa.');
                setLoading(false);
                return;
            }

            const loc = await Location.getCurrentPositionAsync({});
            setLocation(loc.coords);
            setLoading(false);
        })();
    }, []);

    if (loading) {
        return (
            <View style={styles.loader}>
                <ActivityIndicator size="large" color="#007AFF" />
            </View>
        );
    }

    return (
        <View style={styles.container}>
            {location && (
                <MapView
                    style={styles.map}
                    customMapStyle={darkMode ? mapStyleDark : mapStyleLight}
                    showsUserLocation
                    initialRegion={{
                        latitude: location.latitude,
                        longitude: location.longitude,
                        latitudeDelta: 0.01,
                        longitudeDelta: 0.01,
                    }}
                >
                    <Marker
                        coordinate={{
                            latitude: location.latitude,
                            longitude: location.longitude,
                        }}
                        title="Você está aqui"
                        description="Localização atual"
                    />

                    {/* Efeito de concentração (círculos concêntricos com fade) */}
                    <Circle
                        center={location}
                        radius={20}
                        strokeWidth={0}
                        fillColor="rgba(255, 0, 0, 0.2)"
                    />
                    <Circle
                        center={location}
                        radius={50}
                        strokeWidth={0}
                        fillColor="rgba(255, 0, 0, 0.2)"
                    />
                    <Circle
                        center={location}
                        radius={100}
                        strokeWidth={0}
                        fillColor="rgba(255, 0, 0, 0.05)"
                    />
                </MapView>
            )}

            <TouchableOpacity style={styles.toggleButton} onPress={toggleMapStyle}>
                <MaterialCommunityIcons
                    name={darkMode ? "weather-sunny" : "weather-night"}
                    size={28}
                    color="#fff"
                />
            </TouchableOpacity>
        </View>
    );
}
