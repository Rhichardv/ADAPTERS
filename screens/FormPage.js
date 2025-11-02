import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addTask, updateTask } from "../store/taskSlice";
import ButtonCustom from "../components/ButtonCustom";
import { useRoute, useNavigation } from "@react-navigation/native";
import useToggleAlert from "../hooks/useToggleAlert";

export default function FormPage() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const route = useRoute();
  const { task } = route.params || {};
  const { showAlert } = useToggleAlert();

  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      title: task?.title || "",
      description: task?.description || "",
    },
  });

  const onSubmit = (data) => {
    // Agregamos el campo completed con el valor original o false si es una nueva tarea
    const taskData = { 
      ...data, 
      completed: task?.completed || false 
    };
    
    if (task) {
      dispatch(updateTask({ id: task.id, ...taskData }));
      showAlert("Tarea actualizada!");
    } else {
      dispatch(addTask(taskData));
      showAlert("Tarea agregada!");
    }
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Título *</Text>
      <Controller
        control={control}
        name="title"
        rules={{ 
          required: "El título es obligatorio",
          minLength: {
            value: 3,
            message: "El título debe tener al menos 3 caracteres"
          }
        }}
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={[styles.input, errors.title && styles.inputError]}
            placeholder="Escribe el título"
            value={value}
            onChangeText={onChange}
          />
        )}
      />
      {errors.title && <Text style={styles.errorText}>{errors.title.message}</Text>}

      <Text style={styles.label}>Descripción</Text>
      <Controller
        control={control}
        name="description"
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="Descripción (opcional)"
            value={value}
            onChangeText={onChange}
          />
        )}
      />

      <ButtonCustom title="Guardar" onPress={handleSubmit(onSubmit)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 15, backgroundColor: "#fff" },
  label: { fontWeight: "bold", marginTop: 15 },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 8,
    marginTop: 5,
  },
  inputError: {
    borderColor: "#e74c3c",
  },
  errorText: {
    color: "#e74c3c",
    fontSize: 12,
    marginTop: 5,
  },
});