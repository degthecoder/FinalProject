import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { theme } from "../../assets/themes/theme";
import { StyleSheet, Text, View } from "react-native";
import { useContext } from "react";
import { AuthContext } from "../../context/context";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.palette.beige.main,
    padding: 0,
  },
  profileContainer: {
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    // justifyContent:"space-between",
    backgroundColor: theme.palette.secondary.main,
  },
  profileHeader: {
    fontSize: 32,
    fontFamily: theme.typography.fontFamily.regular,
    color: theme.palette.darkBlue.main,
    marginLeft: 10,
  },
  tabBar: {
    backgroundColor: theme.palette.darkBlue.main,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f00",
    padding: 20,
  },
  logo: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  content: {
    flex: 1,
    alignItems: "center",
  },
  button: {
    backgroundColor: "#00f",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
  },
});

const Profile = () => {
  const { authUser } = useContext(AuthContext);
  // const user = authUser.toUpperCase();
  return (
    <SafeAreaView SafeAreaView style={styles.container}>
      <View style={styles.profileContainer}>
        <Ionicons name="person" color={theme.palette.darkBlue.main} size={36} />
        <Text style={styles.profileHeader}>{authUser}</Text>
      </View>
    </SafeAreaView>
  );
};

export default Profile;
