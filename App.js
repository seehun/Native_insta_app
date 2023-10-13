import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/screens/Home';
import Search from './src/screens/Search';
import Activity from './src/screens/Activity';
import Profile from './src/screens/Profile';
import Status from './src/screens/Status';
import FriendProfile from './src/screens/FriendProfile';
import EditProfile from './src/screens/EditProfile';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
  const BottomTabScreen = () => {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarHideOnKeyboard: true,
          tabBarShowLabel: false,
          headerShown: false,
          tabBarStyle: {
            height: 70,
          },
        })}
      >
        <Tab.Screen name='Home' component={Home} />
        <Tab.Screen name='Search' component={Search} />
        <Tab.Screen name='Activity' component={Activity} />
        <Tab.Screen name='Profile' component={Profile} />
      </Tab.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Bottom' component={BottomTabScreen} />
        <Stack.Screen name='Status' component={Status} />
        <Stack.Screen name='FriendProfile' component={FriendProfile} />
        <Stack.Screen name='EditProfile' component={EditProfile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
