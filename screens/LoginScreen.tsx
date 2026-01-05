import { router } from "expo-router";
import { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = () => {
    router.push("/(tabs)");
  };
  return (
    <View>
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>Login View</Text>
      <TextInput
        style={{
          borderWidth: 1,
          borderColor: "black",
          padding: 10,
          margin: 10,
        }}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={{
          borderWidth: 1,
          borderColor: "black",
          padding: 10,
          margin: 10,
        }}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
}
