import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const AssessmentScreen = ({ navigation }) => {
    const question = 'What do you do if you are traveling down the road and you get a line of automobiles behind you and you are impeding traffic?';

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Assessment</Text>
                <View style={styles.timerBadge}>
                    <Text style={styles.timerText}>20 min</Text>
                </View>
            </View>

            <View style={styles.card}>
                <View style={styles.questionHeader}>
                    <Text style={styles.questionCount}>Question: <Text style={styles.boldText}>3/30</Text></Text>
                    <Text style={styles.quitText}>Quit</Text>
                </View>

                <Text style={styles.questionText}>{question}</Text>

                <View style={styles.optionsContainer}>
                    <TouchableOpacity style={styles.correctOption}>
                        <Text style={styles.optionTextSelected}>
                            Put on your turn signal, pull over in a safe spot and wave them by
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.option}>
                        <Text style={styles.optionText}>
                            Keep going get the fastest speed that you are able to travel.
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.option}>
                        <Text style={styles.optionText}>
                            Turn around and go to the opposite direction
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.option}>
                        <Text style={styles.optionText}>
                            Keep traveling until you reach your destination
                        </Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                    <Text style={styles.seeResult}>See Result </Text>
                    <Icon name="chevron-down" size={16} color="#ff2e2e" />
                </TouchableOpacity>

            </View>

            <View style={styles.footer}>
                <TouchableOpacity style={styles.navButton} onPress={() => navigation.goBack()}>
                    <Text style={styles.navButtonText}>Previous</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('ResultScreen')}>
                    <Text style={styles.navButtonText}>Next</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default AssessmentScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        paddingTop: 60,
        paddingHorizontal: 16,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    timerBadge: {
        backgroundColor: '#ff2e2e',
        borderRadius: 5,
        paddingHorizontal: 8,
        paddingVertical: 2,
    },
    timerText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    headerText: {
        color: '#fff',
        fontSize: 22,
        fontWeight: 'bold',
    },
    card: {
        backgroundColor: '#111',
        marginTop: 20,
        marginBottom: 20,
        padding: 20,
        borderRadius: 12,
        shadowColor: '#fff',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.5,
        shadowRadius: 8,
        elevation: 10, 
    },
    questionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    questionCount: {
        color: '#fff',
        fontSize: 16,
    },
    boldText: {
        fontWeight: 'bold',
    },
    quitText: {
        color: '#aaa',
    },
    questionText: {
        color: '#fff',
        fontSize: 16,
        marginBottom: 20,
    },
    optionsContainer: {
        marginBottom: 15,
    },
    correctOption: {
        backgroundColor: '#ff2e2e',
        padding: 15,
        borderRadius: 8,
        marginBottom: 10,
    },
    option: {
        backgroundColor: '#1a1a1a',
        padding: 15,
        borderRadius: 8,
        marginBottom: 10,
        borderColor: '#333',
        borderWidth: 1,
    },
    optionText: {
        color: '#fff',
        fontSize: 14,
    },
    optionTextSelected: {
        color: '#fff',
        fontSize: 14,
        fontWeight: '600',
    },
    seeResult: {
        color: '#ff2e2e',
        // marginTop: 10,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 10,
        marginBottom: 40,
    },
    navButton: {
        backgroundColor: '#ff2e2e',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 8,
    },
    navButtonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});
