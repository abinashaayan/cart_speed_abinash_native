import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import styles from '../styles/SplashScreen';

const SplashScreen = ({ navigation }) => {
  return (
    <LinearGradient
      colors={['#000000', '#4b0000']}
      style={styles.container}
    >
      <Image
        source={require('../assets/logo.png')}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.title}>Title of the Product here</Text>
      <Text style={styles.tagline}>Maybe some tagline here</Text>

      <View style={styles.dotsContainer}>
        <View style={styles.dot} />
        <View style={styles.dot} />
        <View style={styles.dot} />
      </View>

      <TouchableOpacity style={styles.loginBtn} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.loginText}>Log in</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.signupBtn} onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.signupText}>Sign up</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}

export default SplashScreen;
