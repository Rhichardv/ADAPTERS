import { Alert } from "react-native";

export default function useToggleAlert() {
  const showAlert = (msg) => Alert.alert("Aviso", msg);
  return { showAlert };
}