import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    KeyboardAvoidingView,
    Platform,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

const ForgotPassword = ({ navigation }) => {
    const [emailOrPhone, setEmailOrPhone] = useState('');

    return (
        <LinearGradient colors={['#000000', '#360000']} style={styles.container}>
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
                <View style={styles.content}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                        <Ionicons name="chevron-back" size={28} color="red" />
                    </TouchableOpacity>
                    <View style={styles.forgetTextContent}>
                        <Text style={styles.title}>Forgot Password</Text>
                        <Text style={styles.subtitle}>We can help to recover your account</Text>
                    </View>
                    <Text style={styles.label}>Email / Phone No.</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter Email / Phone No."
                        placeholderTextColor="#999"
                        value={emailOrPhone}
                        onChangeText={setEmailOrPhone}
                    />
                </View>
                <View style={styles.footer}>
                    <TouchableOpacity style={styles.sendLinkButton} onPress={() => navigation.navigate('VerificationScreen')}>
                        <Text style={styles.sendLinkText}>Send Link</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </LinearGradient>
    );
};

export default ForgotPassword;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        paddingTop: 60,
        paddingHorizontal: 16,
    },
    forgetTextContent: {
        alignItems: 'center',
        marginBottom: 30,
    },
    backButton: {
        marginBottom: 30,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'left',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 14,
        color: '#ccc',
        marginBottom: 40,
    },
    label: {
        color: '#fff',
        marginBottom: 8,
        fontSize: 14,
    },
    input: {
        borderWidth: 1,
        borderColor: '#999',
        borderRadius: 4,
        paddingHorizontal: 12,
        paddingVertical: 12,
        color: '#fff',
        fontSize: 14,
    },
    footer: {
        paddingHorizontal: 25,
        paddingBottom: 40,
        marginTop: 'auto',
    },
    sendLinkButton: {
        backgroundColor: 'red',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
    },
    sendLinkText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});
