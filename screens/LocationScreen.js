import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import ManualLocationScreen from "./ManualLocationScreen";
import { darkMapStyle } from "../mapStyles";
import Icon from "react-native-vector-icons/Ionicons";

const LocationScreen = ({navigation}) => {
    const [manual, setManual] = useState(false);
    const [location, setLocation] = useState(null);
    const [mapTheme, setMapTheme] = useState("dark");
    const [mapType, setMapType] = useState("standard");
    const [showOptions, setShowOptions] = useState(false);
    const [trafficEnabled, setTrafficEnabled] = useState(false);

    useEffect(() => {
        (async () => {
            const { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== "granted") {
                console.log("Permission denied");
                return;
            }

            const loc = await Location.getCurrentPositionAsync({});
            setLocation({
                latitude: loc.coords.latitude,
                longitude: loc.coords.longitude,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01,
            });
        })();
    }, []);

    if (manual) {
        return <ManualLocationScreen />;
    }

    return (
        <View style={styles.container}>
            {location && (
                <MapView
                    style={styles.map}
                    region={location}
                    showsUserLocation={true}
                    showsTraffic={trafficEnabled}
                    mapType={mapType}
                    customMapStyle={mapTheme === "dark" ? darkMapStyle : []}
                >
                    <Marker coordinate={location} title="You are here" />
                </MapView>
            )}

            {/* ☰ Toggle Options Button */}
            <TouchableOpacity
                style={styles.floatingButton}
                onPress={() => setShowOptions(!showOptions)}
            >
                <Icon name={showOptions ? "close" : "options-outline"} size={10} color="#fff" />
            </TouchableOpacity>

            {/* 📋 Floating Options */}
            {showOptions && (
                <View style={styles.floatingContainer}>
                    <TouchableOpacity style={styles.optionButton} onPress={() => setMapType("standard")}>
                        <Text style={styles.optionText}>Map</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.optionButton} onPress={() => setMapType("terrain")}>
                        <Text style={styles.optionText}>Terrain</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.optionButton} onPress={() => setMapType("satellite")}>
                        <Text style={styles.optionText}>Satellite</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.optionButton} onPress={() => setTrafficEnabled(prev => !prev)}>
                        <Text style={styles.optionText}>{trafficEnabled ? "No Traffic" : "Traffic"}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.optionButton} onPress={() => setMapTheme(prev => prev === "dark" ? "light" : "dark")}>
                        <Text style={styles.optionText}>{mapTheme === "dark" ? "Light" : "Dark"}</Text>
                    </TouchableOpacity>
                </View>
            )}

            {/* 🔻 Bottom Manual Location Controls */}
            <View style={styles.bottomContainer}>
                <Text style={styles.heading}>What's your location?</Text>

                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("MainApp")}>
                    <Text style={styles.buttonText}>Allow Location Access</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => setManual(true)}>
                    <Text style={styles.buttonText}>Enter Location Manually</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default LocationScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
    floatingButton: {
        position: "absolute",
        top: 50,
        right: 20,
        backgroundColor: "#000",
        padding: 5,
        borderRadius: 30,
        zIndex: 1000,
    },
    floatingContainer: {
        position: "absolute",
        top: 70,
        right: 20,
        backgroundColor: "rgba(0,0,0,0.9)",
        borderRadius: 10,
        padding: 10,
        zIndex: 999,
    },
    optionButton: {
        padding: 8,
        marginVertical: 4,
        backgroundColor: "#444",
        borderRadius: 6,
    },
    optionText: {
        color: "#fff",
    },
    bottomContainer: {
        position: "absolute",
        bottom: 0,
        width: "100%",
        backgroundColor: "black",
        padding: 20,
        alignItems: "center",
    },
    heading: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 20,
    },
    button: {
        backgroundColor: "red",
        borderRadius: 10,
        width: "90%",
        padding: 15,
        marginVertical: 8,
    },
    buttonText: {
        color: "white",
        textAlign: "center",
        fontWeight: "bold",
    },
});
