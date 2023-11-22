import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Header from "./components/Header";
import Main from "./components/Main";

export default function App() {
  return (
    <View style={styles.appContainer}>
      <Header />
      <Main />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    backgroundColor: "#e0e5e5",
  },
});
