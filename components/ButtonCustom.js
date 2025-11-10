import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default function ButtonCustom({ title, onPress }) {
  return (
    <TouchableOpacity style={styles.btn} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: "#13b858ff", //creo el boton de home de agregar tarea
    padding: 12,
    borderRadius: 10,
    marginTop: 20,
    alignItems: "center",
  },
  text: { color: "#fff", fontWeight: "bold", fontSize: 16 },
});