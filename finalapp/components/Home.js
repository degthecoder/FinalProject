import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { theme } from "../assets/themes/theme";
import { fetchLocation } from "../api/location";
import { useContext, useEffect } from "react";
import { fetchLogin } from "../api/authentication";
import { fetchNearRestaurants } from "../api/restaurant";
import { AuthContext } from "../context/context";

const styles = StyleSheet.create({
  titleContainer: {
    backgroundColor: theme.palette.secondary.main,
    alignItems: "center",
    padding: 10,
  },
  container: {
    flex: 1,
    backgroundColor: theme.palette.secondary.main,
    padding: 0,
  },
  restaurantContainer: {
    flex: 1,
    backgroundColor: theme.palette.beige.main,
  },
  title: {
    fontSize: 32,
    fontFamily: theme.typography.fontFamily.boldItalic,
    color: theme.palette.darkBlue.main,
  },
  header: {
    marginLeft: 10,
    fontSize: 24,
    fontFamily: theme.typography.fontFamily.regular,
    color: theme.palette.primary.main,
  },
  image: {
    width: 120,
    height: 80,
    borderRadius: 10,
  },
  logo: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  restaurantTitle: {
    fontSize: 16,
    fontFamily: theme.typography.fontFamily.light,
    color: theme.palette.pink.main,
  },
  restaurantHeader: {
    fontSize: 12,
    fontFamily: theme.typography.fontFamily.light,
    color: theme.palette.pink.main,
  },
  content: {
    padding: 8,
    alignContent: "center",
    backgroundColor: theme.palette.primary.main,
  },
});

const Home = () => {
  const { authUser } = useContext(AuthContext);
  useEffect(() => {
    fetchLocation();
    fetchNearRestaurants();
  }, []);

  const restaurants = [
    {
      id: "1",
      name: "Restaurant 1",
      image: require("../assets/images/food-background.jpg"),
      rating: 4.5,
      ambiance: "Casual",
    },
    {
      id: "2",
      name: "Restaurant 2",
      image: require("../assets/images/food-background.jpg"),
      rating: 3.7,
      ambiance: "Fine dining",
    },
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.content}
      onPress={() =>
        navigation.navigate("RestaurantDetails", { restaurant: item })
      }
    >
      <Image source={item.image} style={styles.image} />
      <Text style={styles.restaurantTitle}>{item.name}</Text>
      <Text style={styles.restaurantHeader}>{item.ambiance}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.titleContainer}>
          {/* <Image source={require("../assets/logo.svg")} style={styles.image}></Image> */}
          <Text style={styles.title}>Welcome, {authUser}</Text>
        </View>
      </SafeAreaView>
      <View style={styles.restaurantContainer}>
        <Text style={styles.header}>Restaurants</Text>
        <FlatList
          data={restaurants}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          numColumns={2}
          contentContainerStyle={styles.content}
        />
      </View>
      <View style={styles.restaurantContainer}>
        <Text style={styles.header}>Restaurants</Text>
        <FlatList
          data={restaurants}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          numColumns={2}
          contentContainerStyle={styles.content}
        />
      </View>
      <View style={styles.restaurantContainer}/>
    </View>
  );
};

export default Home;
