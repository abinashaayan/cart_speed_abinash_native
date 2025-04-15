import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native';
import MapView, { Polygon, Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { Ionicons } from '@expo/vector-icons';
import { darkMapStyle } from '../mapStyles';

const { width, height } = Dimensions.get('window');

export default function LocalMapScreen({ navigation }) {
  const polygonCoords = [
    { latitude: 51.5415, longitude: -0.1467 },
    { latitude: 51.5425, longitude: -0.1430 },
    { latitude: 51.5385, longitude: -0.1400 },
    { latitude: 51.5365, longitude: -0.1450 },
    { latitude: 51.5390, longitude: -0.1485 },
  ];

  const userLocation = {
    latitude: 51.5395,
    longitude: -0.1440,
  };

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={StyleSheet.absoluteFill}
        customMapStyle={darkMapStyle}
        initialRegion={{
          latitude: userLocation.latitude,
          longitude: userLocation.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        <Polygon
          coordinates={polygonCoords}
          strokeColor="#FF0000"
          fillColor="rgba(255,0,0,0.05)"
          strokeWidth={2}
          lineDashPattern={[10, 5]}
        />
        <Marker coordinate={userLocation}>
          <Image
            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/147/147144.png' }}
            style={styles.avatar}
          />
        </Marker>
      </MapView>

      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" style={styles.backIcon} size={20} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Location</Text>
      </View>

      <View style={styles.warningBox}>
        <Text style={styles.warningText}>⚠️ 2km Close to boundaries</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  header: {
    position: 'absolute',
    top: 40,
    left: 20,
    right: 20,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderRadius: 8,
  },
  headerTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  backIcon: {
    padding: 5,
    backgroundColor: 'red',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'white'
  },
  warningBox: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    alignSelf: 'center',
    backgroundColor: 'rgba(0,0,0,0.75)',
    padding: 12,
    borderRadius: 12,
  },
  warningText: {
    color: 'gray',
    fontWeight: 'bold',
    fontSize: 14,
    textAlign: 'center',
  },
});
