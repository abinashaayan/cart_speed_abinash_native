import React, { useRef } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { Video } from 'expo-av';

export default function VideoScreen() {
  const videoRef = useRef(null);

  return (
    <View style={styles.container}>
      <Video
        ref={videoRef}
        source={{ uri: 'https://www.w3schools.com/html/mov_bbb.mp4' }} 
        style={styles.video}
        useNativeControls
        resizeMode="contain"
        shouldPlay
        isLooping
      />
      <View style={styles.overlay}>
        <Text style={styles.title}>Lorem ipsum dolor sit amet...</Text>
      </View>
    </View>
  );
}

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  video: {
    height: height,
    width: width,
    alignSelf: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 50,
    padding: 10,
  },
  title: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'right',
    writingDirection: 'rtl', 
  },
});
