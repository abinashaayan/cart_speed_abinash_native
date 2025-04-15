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

const SignUp = ({ navigation }) => {
    const [signUpFormData, setSignUpFormData] = useState({
        fName: "",
        lName: "",
        emailPhoneNo: "",
        state: "",
    });

    const handleInputChange = (field, value) => {
        setSignUpFormData(prevState => ({
            ...prevState,
            [field]: value,
        }));
    };

    return (
        <LinearGradient colors={['#000000', '#360000']} style={styles.container}>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : undefined}
                style={styles.container}
            >
                <ScrollView contentContainerStyle={styles.scrollContainer}>
                    <Text style={styles.title}>Create App account!</Text>
                    <Text style={styles.subtitle}>Maybe some tagline here</Text>

                    <Text style={styles.label}>First Name</Text>
                    <TextInput
                        placeholder="First Name"
                        placeholderTextColor="#999"
                        value={signUpFormData.fName}
                        onChangeText={value => handleInputChange('fName', value)}
                        style={styles.input}
                    />

                    <Text style={styles.label}>Last Name</Text>
                    <TextInput
                        placeholder="Last Name"
                        placeholderTextColor="#999"
                        value={signUpFormData.lName}
                        onChangeText={value => handleInputChange('lName', value)}
                        style={styles.input}
                    />

                    <Text style={styles.label}>Email / Phone No. </Text>
                    <TextInput
                        placeholder="Email / Phone No. "
                        placeholderTextColor="#999"
                        value={signUpFormData.emailPhoneNo}
                        onChangeText={value => handleInputChange('emailPhoneNo', value)}
                        style={styles.input}
                    />

                    <Text style={styles.label}>State</Text>
                    <TextInput
                        placeholder="Enter State"
                        placeholderTextColor="#999"
                        secureTextEntry
                        value={signUpFormData.state}
                        onChangeText={value => handleInputChange('state', value)}
                        style={styles.input}
                    />
                </ScrollView>

                <View style={styles.footerContainer}>
                    <View style={styles.footerTextRow}>
                        <Text style={styles.footerText}>Already have an account? </Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                            <Text style={styles.signupText}>Log In</Text>
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity style={styles.loginButton}>
                        <Text style={styles.loginText}>Log in</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </LinearGradient>
    );
}

export default SignUp;