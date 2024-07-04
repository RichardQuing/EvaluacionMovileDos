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
          <Tab.Screen name="REGISTRA LA RAZA DEL PERRO" component={Register} />
          <Tab.Screen name="Personajes" component={RegisterAlmacenados} />
      <Tab.Screen
        name="EDITAR O REGISTRAR EL REGISTRO"
        component={EditAndDelete}
      />
      <Tab.Screen name="LISTA API" component={List} />
    
      
    </Tab.Navigator>
  );
}

// STACK
const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator initialRouteName="Welcome">
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="MyTabs" component={MyTabs} />
    </Stack.Navigator>
  );
}

// NAVEGADOR (Navigation Container)
export default function Navegador() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
