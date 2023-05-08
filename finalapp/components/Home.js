import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { theme } from "../assets/themes/theme";
import { fetchLocation } from "../api/location";
import { useEffect } from "react";
import { fetchLogin } from "../api/authentication";
import { fetchNearRestaurants } from "../api/restaurant";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.palette.beige.main,
    padding: 0,
  },
  header1: {
    fontSize: 20,
    fontFamily: theme.typography.fontFamily.boldItalic,
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
    justifyContent: "center",
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

const Home = () => {
  useEffect(() => {
    fetchLocation();
    const credentials = { username: "degtheboy", password: "123"};
    // fetchLogin(credentials).then(response => console.log("Res",response.data)).catch(error => console.error("Errorrr:",error));
    fetchNearRestaurants();
  }, []);

  const restaurants = [
    {
      id: "1",
      name: "Restaurant 1",
      // image: require("./assets/restaurant1.jpg"),
    },
    {
      id: "2",
      name: "Restaurant 2",
      // image: require("./assets/restaurant2.jpg"),
    }
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() =>
        navigation.navigate("RestaurantDetails", { restaurant: item })
      }
    >
      {/* <Image source={item.image} style={styles.image} /> */}
      <Text style={styles.title}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View>
          <Text style={styles.header1}>ANAn</Text>
        </View>
      </SafeAreaView>
      <View style={styles.container}>
        <FlatList
          data={restaurants}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          numColumns={2}
          contentContainerStyle={styles.content}
        />
      </View>
    </View>
  );
};

export default Home;
