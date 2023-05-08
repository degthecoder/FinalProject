import React, { useState, useContext } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { AuthContext } from "../../context/context";
import { fetchLogin } from "../../api/authentication";
import { theme } from "../../assets/themes/theme";
import { SafeAreaView } from "react-native-safe-area-context";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.palette.beige.main,
    padding: 16,
    paddingBottom: 100,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    fontFamily: theme.typography.fontFamily.regular,
    marginBottom: 32,
    color: theme.palette.beige.main,
  },
  input: {
    width: "100%",
    height: 40,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: theme.palette.blue.main,
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  button: {
    width: "100%",
    height: 40,
    backgroundColor: theme.palette.darkBlue.main,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
  },
  buttonText: {
    fontFamily: theme.typography.fontFamily.regular,
    color: theme.palette.beige.main,
    fontWeight: "bold",
  },
});

const LoginScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setAuthUser, setLoggedIn, authUser} = useContext(AuthContext);

  const handleLogin = () => {
    // Perform authentication logic here
    // Set user token in the auth context
    console.log("HERE", authUser);
    setAuthUser(username);
    setLoggedIn(true);
    const credentials = { username: username, password: password };
    fetchLogin(credentials).then(response => console.log("Res",JSON.stringify(response.data))).catch(error=>console.error("error",error));
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default LoginScreen;
