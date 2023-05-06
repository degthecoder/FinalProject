import React from "react";
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from "../components/Home";
import { Ionicons } from '@expo/vector-icons';
import { theme } from "../assets/themes/theme";

const Tab = createBottomTabNavigator();

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: theme.palette.darkBlue.main,
  },
});

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: styles.tabBar,
        tabBarActiveTintColor: theme.palette.secondary.main,
        tabBarInactiveTintColor: theme.palette.beige.main,
        tabBarShowLabel: false,
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused, color }) => {
            const size = focused ? 36 : 28;
            return <Ionicons name={"home"} color={color} size={size} />;
          },
        }}
      />
      <Tab.Screen
        name="Match"
        component={Home}
        options={{
          tabBarIcon: ({ focused, color }) => {
            const size = focused ? 36 : 28;
            // const col = focused ? theme.palette.primary.main : theme.palette.primary.main;
            return <Ionicons name={"search"}  color={color} size={size} />;
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Home}
        options={{
          tabBarIcon: ({ focused, color }) => {
            const size = focused ? 36 : 28;
            return <Ionicons name={"person"} color={color} size={size} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
