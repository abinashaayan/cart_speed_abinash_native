import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
    Platform,
    ScrollView
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import styles from '../styles/LoginScreen';
import { Ionicons } from '@expo/vector-icons';

const CreateNewPassword = ({ navigation }) => {
    const [newpassword, setNewpassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    return (
        <LinearGradient colors={['#000000', '#360000']} style={styles.container}>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : undefined}
                style={styles.container}
            >
                <ScrollView contentContainerStyle={styles.scrollContainer}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                        <Ionicons name="chevron-back" size={28} color="red" />
                    </TouchableOpacity>
                    <Text style={styles.title}>Create Password</Text>
                    <Text style={styles.subtitle}>Your account has been created!</Text>

                    <Text style={styles.label}>New Password</Text>
                    <TextInput
                        placeholder="Enter New Password"
                        placeholderTextColor="#999"
                        value={newpassword}
                        onChangeText={setNewpassword}
                        style={styles.input}
                    />

                    <Text style={styles.label}>Confirm New Password</Text>
                    <TextInput
                        placeholder="Confirm New Password"
                        placeholderTextColor="#999"
                        secureTextEntry
                        value={confirmPassword}
                        onChangeText={setConfirmPassword}
                        style={styles.input}
                    />
                </ScrollView>

                <View style={styles.footerContainer}>
                    <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('Login')}>
                        <Text style={styles.loginText}>Confirm Password</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </LinearGradient>
    );
}

export default CreateNewPassword;