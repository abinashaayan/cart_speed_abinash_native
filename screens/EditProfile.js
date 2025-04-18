import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons, MaterialIcons, FontAwesome5 } from '@expo/vector-icons';
import styles from '../styles/EditProfile';

const InputField = ({ icon, placeholder, value }) => {
    return (
        <View style={styles.fieldContainer}>
            <View style={styles.inputWrapper}>
                <Text style={styles.label}>{placeholder}</Text>
                <View style={styles.leftIcon}>
                    <View style={styles.iconCircle}>
                        {icon}
                    </View>
                </View>

                <TextInput style={styles.input} value={value} placeholder={placeholder} placeholderTextColor="#aaa" />
                <TouchableOpacity>
                    <MaterialIcons name="edit" size={18} color="white" />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default function EditProfile({ navigation }) {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.backIcon} onPress={() => navigation.goBack()}>
                <Ionicons name="chevron-back" size={28} color="white" />
            </TouchableOpacity>
            <View style={styles.avatarContainer}>
                <View style={styles.avatarCircle}>
                    <Ionicons name="person" size={60} color="white" />
                </View>
            </View>
            <InputField placeholder="Name" value="XYZ" icon={<FontAwesome5 name="user" size={15} color="white" />} />
            <InputField placeholder="Email" value="xyz@gmail.com" icon={<MaterialIcons name="email" size={15} color="white" />} />
            <InputField placeholder="Phone Number" value="91********" icon={<FontAwesome5 name="phone-alt" size={15} color="white" />} />
            <InputField placeholder="Address" value="xyzabc" icon={<Ionicons name="location" size={15} color="white" />} />
            <TouchableOpacity style={styles.submitBtn} onPress={() => navigation.navigate('Profile')}>
                <Text style={styles.submitText}>Submit</Text>
            </TouchableOpacity>
        </View>
    );
}


