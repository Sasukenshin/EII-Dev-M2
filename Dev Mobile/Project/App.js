import React from "react";
import { useState, useEffect } from 'react';
import { View, Text, Button, FlatList, SafeAreaView, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Constants from 'expo-constants';

const typicodeUsers = require('./users.json');

// Elements
const ListItem = ({ item, navigation }) => {

  return (
    <View style={styles.item}>
      <Text style={styles.title}>
        {item.name}
      </Text>
      <Button
        title="Voir le profil"
        color='#2cfc03'
        onPress={() => {
          navigation.navigate('User Profile', { user: item },);
        }}
      />
    </View>
  )
};


// Screens
function HomeScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="User List" component={UserList} />
      <Stack.Screen name="User Profile" component={UserProfile} />
    </Stack.Navigator>
  );
}

const UserList = ({ navigation }) => {
  const [result, setResult] = React.useState([]);

  React.useEffect(() => {
    setResult(typicodeUsers);
    // fetch("https://jsonplaceholder.typicode.com/users/")
    //   .then(response => {
    //     return response.json();
    //   })
    //   .then(json => {
    //     console.log('json', json);
    //     setResult(json);
    //   })
    //   .catch(error => {
    //     console.warn("error", error);
    //     // Load data from file
    //     setResult(typicodeUsers);
    //   });
  }, []);

  return (
    <SafeAreaView
      style={styles.container}
    >
      <Text>Liste d'utilisateurs</Text>

      <FlatList
        data={result}
        renderItem={({ item }) => <ListItem item={item} navigation={navigation} />}
        keyExtractor={item => item.id.toString()}
      />
    </SafeAreaView>
  );
};

const UserProfile = ({ route, navigation }) => {
  const { user } = route.params;
  console.log('user', user);


  return (
    <View style={styles.container}>
      <Text style={styles.title}>{user.name}</Text>

      <View style={styles.item}>
        {/* User infos */}
        <Text>Nom d'utilisateur: {user.username}</Text>
        <Text>Email: {user.email}</Text>
        <Text>Tel: {user.phone}</Text>
        {/* Linebreak */}
        <Text>{"\n"}</Text>
        <View>
          <Text>Adresse: </Text>
          <Text>{user.address.suite}</Text>
          <Text>{user.address.street} - {user.address.city}</Text>
        </View>
      </View>


      <View style={{ flex: 1, alignItems: "center", justifyContent: "space-between", flexDirection: "row" }}>
        <Button color='#2cfc03' title="Go back" onPress={() => navigation.goBack()} />
      </View>

    </View>
  );
};

// TODO: do something
const BonusNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Screen3" component={Screen3} options={{ title: 'Bonus' }} />
      <Stack.Screen name="Screen4" component={Screen4} />
    </Stack.Navigator>
  )
}

const Screen3 = ({ navigation }) => {
  return (
    <View>
      <Text>Screen 3</Text>
      <Button
        title="Go to screen 4"
        onPress={() => {
          navigation.navigate("Screen4");
        }}
      />
    </View>
  );
};

const Screen4 = ({ navigation }) => {
  return (
    <View>
      <Text>Screen 4</Text>
      <Button
        title="Go to home"
        // TODO: Go back home with drawer
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'HomeScreen' }} />
        <Tab.Screen
          name="Bonus"
          component={BonusNavigator}
          options={{ title: 'Mes Bonus' }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    alignItems: "center",
    justifyContent: "center",
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default App;

