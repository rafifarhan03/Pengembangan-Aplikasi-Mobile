import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";

const App = () => {
  const [count, setCount] = useState(0);
  const onPress = () => setCount(prevCount => prevCount + 1);
  const reset = () => setCount(prevCount => 0);
  return (
    <View style={styles.container}>
      <Image
        style={styles.tinyLogo}
        source={"./zikir.png"}
      />

      <Text style={styles.title}>
        Udah Zikir Hari Ini?
      </Text>
      <View style={styles.countContainer}>
        <Text>Count: {count}</Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={onPress}
      >
        <Text>Press Here</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={reset}
      >
        <Text>Reset</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  tinyLogo: {
    alignContent: "center",
    alignSelf: "center",
    width: 150,
    height: 150,
  },
  title:{
    fontSize: 32,
    color: "green",
    textAlign: "center"
  },
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10
  },
  countContainer: {
    alignItems: "center",
    padding: 10
  }
});

export default App;