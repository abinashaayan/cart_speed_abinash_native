import React, { useRef, useState } from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    KeyboardAvoidingView,
    Platform
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

const VerificationScreen = ({ navigation }) => {
    const [otp, setOtp] = useState(['', '', '', '']);
    const inputs = useRef([]);

    const handleChange = (text, index) => {
        const newOtp = [...otp];
        newOtp[index] = text;
        setOtp(newOtp);

        if (text && index < 3) {
            inputs.current[index + 1].focus();
        }
    };

    return (
        <LinearGradient colors={['#000000', '#360000']} style={styles.container}>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : undefined}
                style={{ flex: 1 }}
            >
                <View style={styles.content}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                        <Ionicons name="chevron-back" size={28} color="red" />
                    </TouchableOpacity>
                    <Text style={styles.title}>Verification Code</Text>
                    <Text style={styles.subtitle}>
                        <Text style={styles.highlight}>We send verification code to your email . You can check your inbox.</Text>
                    </Text>

                    <Text style={styles.inputLabel}>Enter Your Verification Code Here.</Text>

                    <View style={styles.otpContainer}>
                        {otp.map((digit, index) => (
                            <TextInput
                                key={index}
                                style={styles.otpInput}
                                keyboardType="numeric"
                                maxLength={1}
                                value={digit}
                                onChangeText={text => handleChange(text, index)}
                                ref={ref => (inputs.current[index] = ref)}
                            />
                        ))}
                    </View>
                </View>

                <View style={styles.footer}>
                    <TouchableOpacity style={styles.verifyButton} onPress={() => navigation.navigate("CreateNewPassword")}>
                        <Text style={styles.verifyText}>Verify</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </LinearGradient>
    );
};

export default VerificationScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        paddingTop: 60,
        paddingHorizontal: 16,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
        marginBottom: 10,
        marginTop: 20,
    },
    subtitle: {
        fontSize: 14,
        color: '#ccc',
        textAlign: 'center',
        lineHeight: 20,
        marginBottom: 30,
    },
    highlight: {
        color: '#fff',
        fontWeight: 'bold',
    },
    inputLabel: {
        color: '#fff',
        textAlign: 'center',
        marginBottom: 30,
        fontSize: 15,
    },
    otpContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        paddingHorizontal: 20,
    },
    otpInput: {
        borderBottomWidth: 2,
        borderColor: '#999',
        width: 50,
        height: 60,
        fontSize: 36,
        color: 'red',
        textAlign: 'center',
    },
    footer: {
        paddingHorizontal: 25,
        paddingBottom: 40,
        marginTop: 'auto',
    },
    verifyButton: {
        backgroundColor: 'red',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
    },
    verifyText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});
