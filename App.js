import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Home'
import Category from './src/screens/Category';
import ChickenRecipe from './src/screens/Recipes/ChickenRecipe';

const Stack = createNativeStackNavigator();

function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Category" component={Category} />
        <Stack.Screen name="ChickenRecipe" component={ChickenRecipe} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;