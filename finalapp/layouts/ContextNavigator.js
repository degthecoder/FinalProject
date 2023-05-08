import { useContext } from "react";
import { AuthContext } from "../context/context";
import LoginScreen from "../components/splash/Login";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import TabNavigator from "./Navigator";

const Stack = createStackNavigator();

const ContextNavigator = () => {
  const { isLoggedIn } = useContext(AuthContext);
  console.log(isLoggedIn);
  if (isLoggedIn) {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Details" component={TabNavigator} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Details" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default ContextNavigator;
