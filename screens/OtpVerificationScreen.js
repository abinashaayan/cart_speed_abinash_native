// OtpVerificationScreen.js

import React, { useRef, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const OtpVerificationScreen = ({ navigation }) => {
  const [otp, setOtp] = useState(['', '', '', '']);
  const inputsRef = useRef([]);

  const handleChange = (index, value) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move to next input if value is not empty and not the last one
    if (value && index < inputsRef.current.length - 1) {
      inputsRef.current[index + 1].focus();
    }

    // If value is empty and backspace is pressed, move back
    if (!value && index > 0) {
      inputsRef.current[index - 1].focus();
    }
  };

  return (
    <View style={styles.container}>
      {/* Top Section */}
      <View style={styles.topSection}>
        <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={20} color="white" />
        </TouchableOpacity>
      </View>

      <View style={{ marginTop: 30 }}>
        <Text style={styles.title}>Enter Verification Code</Text>
        <Text style={styles.subtitle}>We can help to recover your account</Text>
      </View>

      {/* Middle Section */}
      <View style={styles.middleSection}>
        <View style={styles.otpContainer}>
          {otp.map((digit, index) => (
            <TextInput
              key={index}
              ref={(ref) => (inputsRef.current[index] = ref)}
              value={digit}
              onChangeText={(value) => handleChange(index, value)}
              style={[styles.otpInput, digit !== '' && styles.filledInput]}
              keyboardType="numeric"
              maxLength={1}
              returnKeyType="next"
              autoFocus={index === 0}
            />
          ))}
        </View>
      </View>

      {/* Bottom Section */}
      <View style={styles.bottomSection}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('NewPasswordScreen')}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OtpVerificationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  topSection: {
    alignItems: 'center',
    marginBottom: 40,
  },
  middleSection: {
    flex: 1,
    justifyContent: 'center',
  },
  bottomSection: {
    marginBottom: 20,
  },
  backBtn: {
    position: 'absolute',
    top: 0,
    left: 0,
    padding: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'white',
  },
  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 4,
  },
  subtitle: {
    color: '#ccc',
    textAlign: 'center',
    // marginTop: 4,
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
  },
  otpInput: {
    borderBottomWidth: 2,
    borderBottomColor: '#ccc',
    width: 60,
    fontSize: 34,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  filledInput: {
    borderBottomColor: 'red',
    color: 'red',
  },
  button: {
    backgroundColor: '#FF1515',
    paddingVertical: 14,
    borderRadius: 6,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
