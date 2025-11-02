import React from "react";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { store } from "./store/store";
import HomePage from "./screens/HomePage";
import FormPage from "./screens/FormPage";

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          <SafeAreaView style={{ flex: 1 }}>
            <Stack.Navigator
              screenOptions={{
                headerStyle: { backgroundColor: "#0f8d44ff" },
                headerTintColor: "#fff",
                headerTitleAlign: "center",
              }}
            >
              <Stack.Screen
                name="Home"
                component={HomePage}
                options={{ title: "Inicio" }}
              />
              <Stack.Screen
                name="FormPage"
                component={FormPage}
                options={({ route }) => ({ 
                  title: route.params?.task ? "Editar Tarea" : "Registro de tarea nueva" 
                })}
              />
            </Stack.Navigator>
          </SafeAreaView>
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
}