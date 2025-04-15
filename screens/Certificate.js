import React from "react";
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Certificate = ({ navigation }) => {
  const certificates = [
    { id: 1, issued: "March 2025", exp: "2026" },
    { id: 2, issued: "March 2025", exp: "2026" },
    { id: 3, issued: "March 2025", exp: "2026" },
    { id: 4, issued: "March 2025", exp: "2026" },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={26} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Certificate</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {certificates.map((item) => (
          <View key={item.id} style={styles.card}>
            <View style={styles.cardContent}>
              <View>
                <Text style={styles.status}>Active</Text>
                <Text style={styles.title}>Certificate</Text>
                <Text style={styles.metaText}>
                  Issued : {item.issued} | Exp : {item.exp}
                </Text>
              </View>
              <TouchableOpacity>
                <Ionicons name="eye-outline" size={24} color="red" />
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Certificate;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    paddingTop: 60,
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  headerText: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
    marginLeft: 10,
  },
  scrollContainer: {
    paddingBottom: 20,
  },
  card: {
    backgroundColor: "black",
    borderColor: "red",
    borderWidth: 1,
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
  },
  cardContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  status: {
    color: "limegreen",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  title: {
    color: "white",
    fontSize: 14,
    marginBottom: 4,
  },
  metaText: {
    color: "white",
    fontSize: 12,
  },
});
