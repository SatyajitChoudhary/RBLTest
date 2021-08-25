import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import DummyScreen from '../screens/DummyScreen';
import HomeScreen from '../screens/HomeScreen';
import {StatusBar, View} from 'react-native';

const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <View style={{flex: 1}}>
      <StatusBar backgroundColor="#700000" />
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
              tabBarLabel: 'Home',
              tabBarIcon: () => (
                <MaterialCommunityIcons
                  name="home-outline"
                  color="blue"
                  size={30}
                />
              ),
              headerShown: false,
            }}
          />
          <Tab.Screen
            name="History"
            component={DummyScreen}
            options={{
              tabBarLabel: 'History',
              tabBarIcon: () => (
                <MaterialIcons name="history-edu" color="blue" size={30} />
              ),
            }}
          />
          <Tab.Screen
            name="Grow"
            component={DummyScreen}
            options={{
              tabBarLabel: 'Grow',
              tabBarIcon: () => (
                <MaterialCommunityIcons
                  name="sprout-outline"
                  color="blue"
                  size={30}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Search"
            component={DummyScreen}
            options={{
              tabBarLabel: 'Search',
              tabBarIcon: () => (
                <Feather name="search" color="blue" size={30} />
              ),
            }}
          />
          <Tab.Screen
            name="More"
            component={DummyScreen}
            options={{
              tabBarLabel: 'More',
              tabBarIcon: () => (
                <MaterialIcons name="more-vert" color="blue" size={30} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
}
