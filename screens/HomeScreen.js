import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { Ionicons, FontAwesome5, MaterialCommunityIcons, Entypo } from '@expo/vector-icons';
import styles from '../styles/HomeScreen';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
    const navigation = useNavigation();

    const Card = ({ label, IconComponent, onPress }) => (
        <TouchableOpacity style={styles.cardWrapper} onPress={onPress}>
            <View style={styles.cardWrapper}>
                <View style={styles.redCard} />
                <View style={styles.iconBox}>
                    {IconComponent}
                </View>
                <View style={styles.textBox}>
                    <Text style={styles.cardText}>{label}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View>
                    <Text style={styles.heading}>Hey There!</Text>
                    <Text style={styles.subHeading}>Let's get certified for cart</Text>
                </View>
                <TouchableOpacity>
                    <Ionicons name="notifications" size={26} color="red" />
                </TouchableOpacity>
            </View>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <View style={styles.gridContainer}>
                    <Card label="Safety Video" onPress={() => navigation.navigate('VideoScreen')} IconComponent={<Ionicons name="play" size={40} color="black" />} />
                    <Card label="Take Test" IconComponent={<FontAwesome5 name="file-alt" size={40} color="black" />} />
                    <Card label="Rules and regulations for LSVs" onPress={() => navigation.navigate("CartingRulesScreen")} IconComponent={<MaterialCommunityIcons name="clipboard-text" size={40} color="black" />} />
                    <Card label="Good LSV practices for the area" IconComponent={<FontAwesome5 name="users" size={40} color="black" />} />
                    <Card label="Map of local area" onPress={() => navigation.navigate("LocalMapScreen")} IconComponent={<Entypo name="map" size={40} color="black" />} />
                    <Card label="All Certifications" onPress={() => navigation.navigate("Certificate")} IconComponent={<FontAwesome5 name="certificate" size={40} color="black" />} />
                </View>
            </ScrollView>
        </View>
    );
}


