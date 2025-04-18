import React from 'react';
import {
    View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet
} from 'react-native';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';
import styles from '../styles/LsvPractice';

export default function LsvPractice({ navigation }) {
    const redTabs = ['what is LSV', 'importance', 'Safety Guide'];
    const greenActions = [
        { label: 'Handling & Maneuvering', icon: 'helmet-safety' },
        { label: 'Communication', icon: 'file-alt' },
        { label: 'Load Management', icon: 'chalkboard-teacher' }
    ];
    const rules = [
        {
            title: "Vehicle Inspection",
            sub: "Regularly inspect brakes, tires, lights, and steering before use.",
            category: "Ensure proper maintenance and repairs."
        },
        {
            title: "Personal Safety Gear",
            sub: "Wear helmets, gloves, and other protective equipment.",
            category: "Ensure seatbelts are secured if applicable."
        },
    ];

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name="arrow-back" style={styles.backIcon} size={20} color="white" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>LSV practices</Text>
            </View>

            {/* Search Row */}
            <View style={styles.searchRow}>
                <View style={styles.searchBox}>
                    <Ionicons name="search" size={18} color="red" style={{ marginLeft: 10 }} />
                    <TextInput
                        placeholder="Search"
                        placeholderTextColor="red"
                        style={styles.searchInput}
                    />
                </View>
                <TouchableOpacity style={styles.micButton}>
                    <Ionicons name="mic" size={20} color="white" />
                </TouchableOpacity>
            </View>

            {/* Red Tabs with arrow */}
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.tabRow}>
                {redTabs.map((tab, index) => (
                    <TouchableOpacity key={index} style={styles.redTab}>
                        <Text style={styles.redTabText}>{tab}</Text>
                        <Ionicons name="arrow-forward" size={10} style={styles.arrowLeft} />
                    </TouchableOpacity>
                ))}
            </ScrollView>

            {/* Red Cards */}
            <View style={styles.cardBox}>
                {rules.map((rule, i) => (
                    <View key={i} style={styles.ruleCard}>
                        <View style={{ flex: 1 }}>
                            <Text style={styles.ruleTitle}>{rule.title}</Text>
                            <Text style={styles.ruleSub}>{rule.sub}</Text>
                            <Text style={styles.ruleCategory}>{rule.category}</Text>
                        </View>
                        <View style={styles.ruleCircle} />
                    </View>
                ))}
            </View>

            {/* Green Buttons */}
            <Text style={styles.importantTitle}>Resources & Links</Text>
            <View style={styles.greenBox}>
                {greenActions.map((action, index) => (
                    <TouchableOpacity key={index} style={styles.greenButton}>
                        {/* <FontAwesome5 name={action.icon} size={16} color="lime" style={{ marginRight: 10 }} /> */}
                        <Text style={styles.greenText}>{action.label}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
}