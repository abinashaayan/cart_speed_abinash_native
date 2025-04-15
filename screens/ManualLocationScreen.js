import React, { useState } from "react";
import {
    View, Text, TextInput, TouchableOpacity, StyleSheet,
} from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import Icon from "react-native-vector-icons/Ionicons";
import { darkMapStyle } from "../mapStyles";
import { useNavigation } from "@react-navigation/native";

const ManualLocationScreen = () => {
    const [mapType, setMapType] = useState("standard");
    const [traffic, setTraffic] = useState(false);
    const [darkMode, setDarkMode] = useState(false);
    const [showOptions, setShowOptions] = useState(false);
    const navigation = useNavigation();
    const [region, setRegion] = useState({
        latitude: 51.5416,
        longitude: -0.1420,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
    });

    return (
        <View style={styles.container}>
            <MapView
                provider={PROVIDER_GOOGLE}
                style={styles.map}
                mapType={mapType}
                region={region}
                showsTraffic={traffic}
                customMapStyle={darkMode ? darkMapStyle : []}
            />
            <TouchableOpacity
                style={styles.floatingButton}
                onPress={() => setShowOptions(!showOptions)}
            >
                <Icon name={showOptions ? "close" : "options-outline"} size={10} color="#fff" />
            </TouchableOpacity>
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
                    <TouchableOpacity style={styles.optionButton} onPress={() => setTraffic(!traffic)}>
                        <Text style={styles.optionText}>{traffic ? "No Traffic" : "Traffic"}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.optionButton} onPress={() => setDarkMode(!darkMode)}>
                        <Text style={styles.optionText}>{darkMode ? "Light" : "Dark"}</Text>
                    </TouchableOpacity>
                </View>
            )}
            <View style={styles.bottomContainer}>
                <Text style={styles.heading}>Enter Location</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter Location"
                    placeholderTextColor="#ccc"
                />
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("MainApp")}>
                    <Text style={styles.buttonText}>Enter</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default ManualLocationScreen;

const styles = StyleSheet.create({
    container: { flex: 1 },
    map: { ...StyleSheet.absoluteFillObject },
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
        marginBottom: 15,
    },
    input: {
        width: "90%",
        borderColor: "gray",
        borderWidth: 1,
        borderRadius: 10,
        padding: 15,
        marginBottom: 10,
        color: "white",
    },
    button: {
        backgroundColor: "red",
        borderRadius: 10,
        width: "90%",
        padding: 15,
        marginTop: 10,
    },
    buttonText: {
        color: "white",
        textAlign: "center",
        fontWeight: "bold",
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
});

