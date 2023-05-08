import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useContext, useEffect } from "react";
import { fetchNearRestaurants } from "../../api/restaurant";
import { theme } from "../../assets/themes/theme";
import { fetchLocation } from "../../api/location";
import { Ionicons } from "@expo/vector-icons";

const styles = StyleSheet.create({
  input: {
    padding: 8,
    fontSize: 16,
    fontFamily: theme.typography.fontFamily.italic,
    color: theme.palette.darkBlue.main
  },
  inputContainer: {
    flexDirection:"row",
    borderWidth: 1,
    borderRadius: 10,
    borderColor: theme.palette.darkBlue.main,
    alignItems:"center",
    padding: 10,
    margin:10,
  },
  icon:{
    fontSize:10,
  },
  container: {
    flex: 1,
    backgroundColor: theme.palette.beige.main,
    padding: 0,
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
  headerContainer: {
    marginLeft: 10,
  },
  restaurant: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: theme.palette.primary.main,
    margin: 4,
    marginTop: 10,
    borderRadius:8,
  },
  restaurantTitle: {
    fontSize: 20,
    fontFamily: theme.typography.fontFamily.light,
    color: theme.palette.pink.main,
  },
  restaurantHeader: {
    fontSize: 16,
    fontFamily: theme.typography.fontFamily.light,
    color: theme.palette.pink.main,
  },
  restaurantContainer: {
    flex: 1,
    backgroundColor: theme.palette.beige.main,
  },
  content: {
    padding: 8,
    flexDirection:"row",
    alignContent: "center",
    backgroundColor: theme.palette.primary.main,
  },
});

const Search = () => {
  useEffect(() => {
    fetchLocation();
    fetchNearRestaurants();
  }, []);

  const restaurants = [
    {
      id: "1",
      name: "Restaurant 1",
      image: require("../../assets/images/food-background.jpg"),
      rating: 4.5,
      ambiance: "Casual",
    },
    {
      id: "2",
      name: "Restaurant 2",
      image: require("../../assets/images/food-background.jpg"),
      rating: 3.7,
      ambiance: "Fine dining",
    },
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.restaurant}
      onPress={() =>
        navigation.navigate("RestaurantDetails", { restaurant: item })
      }
    >
      <Image source={item.image} style={styles.image} />
      <View style={styles.headerContainer}>
        <Text style={styles.restaurantTitle}>{item.name}</Text>
        <Text style={styles.restaurantHeader}>{item.ambiance}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.inputContainer}>
          <Ionicons name="search"  size={16} color={theme.palette.darkBlue.main}/>
          <TextInput
            style={styles.input}
            placeholder="Search Restaurants"
          ></TextInput>

        </View>
      </SafeAreaView>
      <View style={styles.restaurantContainer}>
        {/* <Text style={styles.header}>Restaurants</Text> */}
        <FlatList
          data={restaurants}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          // numColumns={2}
          // contentContainerStyle={styles.content}
        />
      </View>
      <View style={styles.restaurantContainer} />
    </View>
  );
};

export default Search;
