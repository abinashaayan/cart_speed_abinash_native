import React from 'react';
import {
    View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet
} from 'react-native';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';
import styles from '../styles/CartingRulesScreen';

export default function CartingRulesScreen({ navigation }) {
    const redTabs = ['Carting Rule', 'Tips', 'Safety Guide'];
    const greenActions = [
        { label: 'Try a helmet', icon: 'helmet-safety' },
        { label: 'Read a safety article', icon: 'file-alt' },
        { label: 'Take a carting lesson', icon: 'chalkboard-teacher' }
      ];

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name="arrow-back" style={styles.backIcon} size={20} color="white" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Carting Rules</Text>
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
                        <Ionicons name="arrow-forward" size={14} color="white" style={{ marginLeft: 6 }} />
                    </TouchableOpacity>
                ))}
            </ScrollView>

            {/* Red Cards */}
            <View style={styles.cardBox}>
                {[1, 2].map((_, i) => (
                    <View key={i} style={styles.ruleCard}>
                        <View style={{ flex: 1 }}>
                            <Text style={styles.ruleTitle}>Speed Limit</Text>
                            <Text style={styles.ruleSub}>Maximum speed of 25 m</Text>
                            <Text style={styles.ruleCategory}>Category: Speed</Text>
                        </View>
                        <View style={styles.ruleCircle} />
                    </View>
                ))}
            </View>

            {/* Green Buttons */}
            <Text style={styles.importantTitle}>Important</Text>
            <View style={styles.greenBox}>
                {greenActions.map((action, index) => (
                    <TouchableOpacity key={index} style={styles.greenButton}>
                        <FontAwesome5 name={action.icon} size={16} color="lime" style={{ marginRight: 10 }} />
                        <Text style={styles.greenText}>{action.label}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
}


