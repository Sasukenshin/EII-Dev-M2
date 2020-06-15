import React from "react";
import { useState, useEffect } from 'react';
import { View, Text, Button, FlatList, SafeAreaView, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Constants from 'expo-constants';

const typicodeUsers =  require('./users.json');

// Elements
const ListItem = ({ item, navigation }) => {

  return (
    <View style={styles.item}>
      <Text style={styles.title}>
        {item.name}
      </Text>
      <Button
        title="See profile"
        onPress={() => {
          navigation.navigate('Screen2', { user: item },);
        }}
      />
    </View>
  )
};


// Screens
function HomeScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Screen1" component={Screen1} />
      <Stack.Screen name="Screen2" component={Screen2} />
    </Stack.Navigator>
  );
}

const Screen1 = ({ navigation }) => {
  const [result, setResult] = React.useState([]);

  React.useEffect(() => {
    setResult(typicodeUsers);
    fetch("https://jsonplaceholder.typicode.com/users/")
      .then(response => {
        return response.json();
      })
      .then(json => {
        console.log('json', json);
        setResult(json);
      })
      .catch(error => {
        console.warn("error", error);
        // Load data from file
        setResult(typicodeUsers);
      });
  }, []);

  return (
    <SafeAreaView
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
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

const Screen2 = ({route, navigation }) => {
  const { user } = route.params;
  console.log('user', user);
  

  return (
    <View style={styles.container}>
      {/* User infos */}
      <Text>{user.name}</Text>
      <Text>{user.username}</Text>
      <Text>{user.email}</Text>


      <Button title="Go to Home" onPress={() => navigation.navigate('Screen1')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
};

const ProfileNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Screen3" component={Screen3} options={{ title: 'Profile' }} />
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
          navigation.navigate("Screen 4");
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
        onPress={() => {
          navigation.navigate("HomeScreen");
        }}
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
          name="Profile"
          component={ProfileNavigator}
          options={{ title: 'Profile' }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
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

