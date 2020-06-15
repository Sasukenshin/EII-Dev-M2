import * as React from 'react';
import { useState, useEffect } from 'react';
import { View, Text, Button, SafeAreaView, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Screen1" component={Screen1} />
      <Stack.Screen name="Screen2" component={Screen2} />
    </Stack.Navigator>
  );
}

// const Item = (elem) => {
//   <Image
//     key={elem.id}
//     style={{ width: elem.width, height: elem.height }}
//     source={{ uri: elem.url }}
//   />
// };
// const completeTask = (task) => {
//   const objIndex = projects.findIndex(obj => obj.value === 'jquery-ui');

// // make new object of updated object.   
// const updatedObj = { ...projects[objIndex], desc: 'updated desc value'};
// }

// let index = state.todos.findIndex(todo => todo.id === action.id);
// let todos = [...state.todos];
// todos[index] = {...todos[index], completed: action.completed};
// return {...state, todos}

const EditButton = (item) => {
  if(!item.completed){
    return(
      <Button
      title="Complete"
      onPress={() => 
        results = {...result[item.id], completed=true}
        setResult(results);
      }
    />
    )
  }
};
const RemoveButton = () => {};

const Screen1 = ({ route, navigation }) => {
  const [result, setResult] = useState([])

  useEffect(() => {
    // fetch('https://api.imgflip.com/get_memes')
    fetch('https://jsonplaceholder.typicode.com/todos/')
      .then(response => {
        return response.json();
      })
      .then(json => {
        console.log(json);
        setResult(json);
      })
      .catch((error) => {
        console.warn(error);
      });
  }, [])

  return (
    <SafeAreaView
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
    >
      <FlatList
        data={result}
        renderItem={({ item }) => (
          <View>
            <Text key={item.id}>{item.title}</Text>
            if({!item.completed}){

            }
          </View>
        )}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

const Screen2 = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>My OBJ</Text>
      <Button
        title="Go to Profile"
        onPress={() => navigation.jumpTo('Profile')}
      />
    </View>
  );
};

const Screen3 = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Screen3</Text>
    </View>
  );
};

const Screen4 = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Screen4</Text>
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

export default App;