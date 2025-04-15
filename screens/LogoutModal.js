import React from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet } from 'react-native';

export default function LogoutModal({ visible, onCancel, onLogout }) {
    return (
        <Modal
            animationType="slide"
            transparent
            visible={visible}
        >
            <View style={styles.overlay}>
                <View style={styles.modalContainer}>
                    <Text style={styles.title}>Log Out!</Text>
                    <Text style={styles.subtitle}>Do you want to logout ?</Text>
                    <View style={styles.buttonRow}>
                        <TouchableOpacity style={styles.logoutBtn} onPress={onLogout}>
                            <Text style={styles.logoutText}>Logout</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.cancelBtn} onPress={onCancel}>
                            <Text style={styles.cancelText}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(0,0,0,0.6)',
    },
    modalContainer: {
        backgroundColor: '#000',
        padding: 25,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        alignItems: 'center',
        borderColor: '#fff',
        borderWidth: 1,
        // Shadow for iOS
        shadowColor: '#fff',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        // Shadow for Android
        elevation: 10,
    },

    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 10,
    },
    subtitle: {
        color: 'white',
        fontSize: 14,
        marginBottom: 20,
    },
    buttonRow: {
        flexDirection: 'row',
        gap: 12,
    },
    logoutBtn: {
        backgroundColor: '#000',
        borderColor: '#FF1515',
        borderWidth: 1.5,
        paddingVertical: 10,
        paddingHorizontal: 25,
        borderRadius: 30,
    },
    cancelBtn: {
        backgroundColor: '#FF1515',
        paddingVertical: 10,
        paddingHorizontal: 25,
        borderRadius: 30,
    },
    logoutText: {
        color: '#FF1515',
        fontWeight: 'bold',
    },
    cancelText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});
