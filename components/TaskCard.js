import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import { deleteTask, updateTask } from "../store/taskSlice";
import useToggleAlert from "../hooks/useToggleAlert";

export default function TaskCard({ task, navigation }) {
  const dispatch = useDispatch();
  const { showAlert } = useToggleAlert();

  const toggleComplete = () => {
    dispatch(updateTask({ 
      id: task.id, 
      ...task, 
      completed: !task.completed 
    }));
  };

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
    showAlert("Tarea eliminada correctamente!");
  };

  return (
    <View style={styles.card}>
      <View style={{ flex: 1 }}>
        <Text style={styles.title}>{task.title}</Text>
        <Text style={styles.description}>{task.description}</Text>
        <Text style={{ color: task.completed ? "#27ae60" : "#e74c3c", fontWeight: "600" }}>
          {task.completed ? "Completada" : "Pendiente"}
        </Text>
      </View>
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate("FormPage", { task })}
          style={styles.edit}
        >
          <Text style={styles.textBtn}>Editar</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={toggleComplete} style={styles.toggle}>
          <Text style={styles.textBtn}>
            {task.completed ? "Marcar incompleta" : "Marcar completa"}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleDelete} style={styles.delete}>
          <Text style={styles.textBtn}>Eliminar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 10,
    marginVertical: 6,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    borderLeftWidth: 4,
    borderLeftColor: "#27ae60",
  },
  title: { 
    fontWeight: "bold", 
    fontSize: 16,
    color: "#000"
  },
  description: {
    color: "#666",
    marginTop: 4
  },
  edit: {
    backgroundColor: "#3498db",
    padding: 6,
    borderRadius: 6,
    marginBottom: 5,
  },
  toggle: {
    backgroundColor: "#27ae60",
    padding: 6,
    borderRadius: 6,
    marginBottom: 5,
  },
  delete: {
    backgroundColor: "#e74c3c",
    padding: 6,
    borderRadius: 6,
  },
  textBtn: { 
    color: "#fff", 
    fontSize: 12,
    fontWeight: "600"
  },
});