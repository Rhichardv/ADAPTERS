import React from "react";
import { View, FlatList, StyleSheet, Text } from "react-native";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import TaskCard from "../components/TaskCard";
import ButtonCustom from "../components/ButtonCustom";
import Header from "../components/Header";

export default function HomePage() {
  const tasks = useSelector((state) => state.tasks);
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Header title="Tareas programadas:" />
      {tasks.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>No tienes tareas aún en la lissta</Text>
        </View>
      ) : (
        <FlatList
          data={tasks}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TaskCard task={item} navigation={navigation} />
          )}
          showsVerticalScrollIndicator={false}
        />
      )}

      <ButtonCustom
        title="+ Agregar Tarea"
        onPress={() => navigation.navigate("FormPage")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 15, backgroundColor: "#f2f2f2" },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },
  emptyText: { fontSize: 18, fontWeight: "600", color: "#555" },
  subText: { fontSize: 14, color: "#888", marginTop: 5 },
});
