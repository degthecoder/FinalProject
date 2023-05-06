import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import {theme} from "../assets/themes/theme";

const styles = StyleSheet.create({
  header1: {
    fontSize: 20,
    fontFamily: theme.typography.fontFamily.boldItalic,
  },
  tabBar: {
    backgroundColor: theme.palette.darkBlue.main,
  },
});

const Home = () => {

  return (
    <SafeAreaView>
      <View>
        <Text style={styles.header1}>ANAn</Text>
      </View>
    </SafeAreaView>
  );
};

export default Home;
