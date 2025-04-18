// NewPasswordScreen.js

import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const NewPasswordScreen = ({ navigation }) => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <View style={styles.container}>
      {/* Top Section */}
      <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={20} color="white" />
      </TouchableOpacity>

      <View style={styles.header}>
        <Text style={styles.title}>Enter New Password!</Text>
        <Text style={styles.subtitle}>Your account already recover!</Text>
      </View>

      {/* Input Fields */}
      <View style={styles.inputWrapper}>
        <Text style={styles.label}>New Password</Text>
        <TextInput
          value={newPassword}
          onChangeText={setNewPassword}
          placeholder="Input password"
          placeholderTextColor="#ccc"
          secureTextEntry
          style={styles.input}
        />

        <Text style={[styles.label, { marginTop: 20 }]}>Confirm New Password</Text>
        <TextInput
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          placeholder="Input password"
          placeholderTextColor="#ccc"
          secureTextEntry
          style={styles.input}
        />
      </View>

      {/* Confirm Button */}
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Profile')}>
        <Text style={styles.buttonText}>Confirm Password</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NewPasswordScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  backBtn: {
    position: 'absolute',
    top: 50,
    left: 20,
    padding: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'white',
  },
  header: {
    alignItems: 'center',
    marginTop: 80,
    marginBottom: 60,
  },
  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  subtitle: {
    color: '#ccc',
    fontSize: 14,
  },
  inputWrapper: {
    flex: 1,
  },
  label: {
    color: '#fff',
    marginBottom: 6,
  },
  input: {
    borderColor: '#999',
    borderWidth: 1,
    borderRadius: 6,
    paddingVertical: 10,
    paddingHorizontal: 12,
    color: '#fff',
  },
  button: {
    backgroundColor: '#FF1515',
    paddingVertical: 14,
    borderRadius: 6,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
