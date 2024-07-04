import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import EditAndDelete from "../screens/EditAndDelete";
import List from "../screens/List";
import Register from "../screens/Register";
import RegisterAlmacenados from "../screens/RegisterAlmacenados";
import Welcome from "../screens/Welcome";

// BOTTOM TAB
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Clima" component={EditAndDelete} options={{ headerShown: false }} />
      <Tab.Screen name="Lista" component={List} />
      <Tab.Screen name="Personajes" component={RegisterAlmacenados} />
    </Tab.Navigator>
  );
}

// STACK
const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator initialRouteName="Welcome">
      <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }} />
      <Stack.Screen name="MyTabs" component={MyTabs} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
}

// NAVEGADOR (Navigation Container)
export default function NavegadorBottom() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
