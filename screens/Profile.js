import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome5, Ionicons, MaterialIcons } from '@expo/vector-icons';
import styles from '../styles/Profile';
import LogoutModal from './LogoutModal';

export default function Profile({ navigation }) {
  const [showLogout, setShowLogout] = useState(false);

  const handleLogout = () => {
    setShowLogout(false);
    // Your logout logic here
  };

  const handleCancel = () => {
    setShowLogout(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <TouchableOpacity style={styles.profileCard} onPress={() => navigation.navigate('EditProfile')}>
        <View style={styles.profileRow}>
          <Image
            source={{ uri: 'https://randomuser.me/api/portraits/men/1.jpg' }}
            style={styles.profileImage}
          />
          <View style={styles.profileText}>
            <Text style={styles.name}>Jhon Doe</Text>
            <Text style={styles.email}>jhon@gmail.com</Text>
          </View>
          <Ionicons name="chevron-forward" size={24} color="white" />
        </View>
      </TouchableOpacity>
      <Text style={styles.sectionTitle}>Settings</Text>
      <View style={styles.settingCard}>
        <TouchableOpacity style={styles.settingItem} onPress={() => navigation.navigate('Certificate')}>
          <View style={styles.settingLeft}>
            <FontAwesome5 name="cog" size={20} color="white" />
            <Text style={styles.settingText}>Certifications</Text>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>Active +9</Text>
            </View>
          </View>
          <Ionicons name="chevron-forward" size={20} color="white" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.settingItem} onPress={() => navigation.navigate('PasswordUpdateScreen')}>
          <View style={styles.settingLeft}>
            <FontAwesome5 name="lock" size={20} color="white" />
            <Text style={styles.settingText}>Change Password</Text>
          </View>
          <Ionicons name="chevron-forward" size={20} color="white" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.settingItem} onPress={() => setShowLogout(true)}>
          <View style={styles.settingLeft}>
            <MaterialIcons name="logout" size={24} color="white" />
            <Text style={styles.settingText}>Logout</Text>
          </View>
          <Ionicons name="chevron-forward" size={20} color="white" />
        </TouchableOpacity>

        <LogoutModal visible={showLogout} onCancel={handleCancel} onLogout={handleLogout} />
      </View>
    </View>
  );
}


