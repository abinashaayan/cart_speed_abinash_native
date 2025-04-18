import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "../styles/Notofication";

const Notofication = ({ navigation }) => {
    const notifications = [
        { id: 1 },
        { id: 2 },
        { id: 3 },
        { id: 4 },
    ];

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name="arrow-back" style={styles.backIcon} size={20} color="white" />
                </TouchableOpacity>
                <Text style={styles.headerText}>Notification</Text>
            </View>

            <ScrollView contentContainerStyle={styles.scrollContainer}>
                {notifications.map((item) => (
                    <View key={item.id} style={styles.card}>
                        <View style={styles.cardContent}>
                            <View>
                                <Text style={styles.status}>13:00</Text>
                                <Text style={styles.title}>
                                    Norem ipsum dolor sit amet, consectetur adipiscing elit.
                                </Text>
                            </View>
                        </View>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
};

export default Notofication;

