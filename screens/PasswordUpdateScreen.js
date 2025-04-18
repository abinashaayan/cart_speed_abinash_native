import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const PasswordUpdateScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={20} color="white" />
        </TouchableOpacity>
      </View>

      <View style={{ marginTop: 30 }}>
        <Text style={styles.title}>To update your password</Text>
        <Text style={styles.subtitle}>To update your password</Text>
      </View>

      <View style={styles.middleSection}>
        <Text style={styles.label}>Email / Phone No.</Text>
        <TextInput
          placeholder="Enter Email / Phone No."
          placeholderTextColor="#ccc"
          style={styles.input}
        />
      </View>

      <View style={styles.bottomSection}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('OtpVerificationScreen')}>
          <Text style={styles.buttonText}>Send Link</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PasswordUpdateScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  topSection: {
    // Header, Title, Subtitle
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
    marginTop: 4,
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
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
