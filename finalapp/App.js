// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { loadFonts } from "./assets/themes/theme";
import { useContext, useEffect, useState } from 'react';
import { AuthContext, AuthProvider } from './context/context';
import ContextNavigator from "./layouts/ContextNavigator";


export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    const loadAsync = async () => {
      await loadFonts();
      setFontsLoaded(true);
    };

    loadAsync();
  }, []);

  if(!fontsLoaded){
    return (<View/>)
  }

  return (
    <AuthProvider>
      <ContextNavigator/>
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
