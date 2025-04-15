import React from 'react';
import {
    View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet
} from 'react-native';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';

export default function CartingRulesScreen({ navigation }) {
    const redTabs = ['Carting Rule', 'Tips', 'Safety Guide'];
    const greenActions = [
        { label: 'Try a helmet', icon: 'helmet-safety' },
        { label: 'Read a safety article', icon: 'file-alt' },
        { label: 'Take a carting lesson', icon: 'chalkboard-teacher' }
      ];

    return (
        <View style={styles.container}>
            {/* Header */}
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        paddingHorizontal: 16,
        paddingTop: 60,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12,
    },
    headerTitle: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 10,
    },
    backIcon: {
        padding: 5,
        // backgroundColor: 'red',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: 'white'
      },
    searchRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12,
    },
    searchBox: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: 'red',
        borderWidth: 1,
        borderRadius: 12,
        paddingVertical: 4,
        marginRight: 8,
    },
    searchInput: {
        flex: 1,
        color: 'red',
        paddingHorizontal: 10,
    },
    micButton: {
        backgroundColor: 'red',
        padding: 14,
        borderRadius: 12,
    },
    tabRow: {
        flexGrow: 0,
        marginBottom: 16,
    },
    redTab: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'red',
        borderRadius: 30,
        paddingVertical: 8,
        paddingHorizontal: 16,
        marginRight: 10,
        shadowColor: 'red',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.4,
        shadowRadius: 4,
    },
    redTabText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 14,
    },
    cardBox: {
        marginBottom: 20,
      },
      ruleCard: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#1a1a1a',
        borderColor: 'red',
        borderWidth: 1,
        borderRadius: 12,
        padding: 16,
        marginBottom: 12,
      },
      ruleTitle: {
        color: 'red',
        fontSize: 16,
        fontWeight: 'bold',
      },
      ruleSub: {
        color: 'white',
        marginTop: 4,
        fontSize: 13,
      },
      ruleCategory: {
        color: 'lime',
        marginTop: 4,
        fontSize: 13,
      },
      ruleCircle: {
        width: 40,
        height: 40,
        backgroundColor: '#fff',
        borderRadius: 20,
        alignSelf: 'center',
      },
      importantTitle: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 10,
      },
      greenBox: {
        gap: 10,
      },
      greenButton: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: 'lime',
        borderWidth: 1.5,
        borderRadius: 10,
        padding: 12,
      },
      greenText: {
        color: 'lime',
        fontWeight: 'bold',
        fontSize: 14,
      },
});
