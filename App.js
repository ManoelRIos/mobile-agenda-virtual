import {StatusBar} from "expo-status-bar";
import {StyleSheet, Text, View} from "react-native";
import CryptoJs from "react-native-crypto-js";
import OAuth from "react-native-app-auth";
import axios from "axios";

export default function App() {
  axios
    .get(apiUrl, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.error(error);
    });

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
