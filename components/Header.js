import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Header({ title }) {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: { padding: 15, backgroundColor: "#13b858ff", borderRadius: 12 },  // en home tareas pendientes: 5
  title: { color: "#fff", fontSize: 20, fontWeight: "bold", textAlign: "center" },
});