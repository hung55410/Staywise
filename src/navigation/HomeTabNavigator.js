import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

import HomeScreen from '../screens/Home';

const Tab = createBottomTabNavigator();

const HomeTabNavigator = props => (
  <Tab.Navigator
    tabBarOptions={{
      activeTintColor: '#5FAE57',
    }}>
    <Tab.Screen
      name={'Explorer'}
      component={HomeScreen}
      options={{
        // eslint-disable-next-line react/no-unstable-nested-components
        tabBarIcon: ({color}) => {
          return <Fontisto name="search" size={25} color={color} />;
        },
        headerShown: false,
      }}
    />

    <Tab.Screen
      name={'Saved'}
      component={HomeScreen}
      options={{
        // eslint-disable-next-line react/no-unstable-nested-components
        tabBarIcon: ({color}) => {
          return <FontAwesome name="heart-o" size={25} color={color} />;
        },
        headerShown: false,
      }}
    />

    <Tab.Screen
      name={'Staywise'}
      component={HomeScreen}
      options={{
        // eslint-disable-next-line react/no-unstable-nested-components
        tabBarIcon: ({color}) => {
          return <FontAwesome5 name="skyatlas" size={25} color={color} />;
        },
        headerShown: false,
      }}
    />

    <Tab.Screen
      name={'Messages'}
      component={HomeScreen}
      options={{
        // eslint-disable-next-line react/no-unstable-nested-components
        tabBarIcon: ({color}) => {
          return <Feather name="message-square" size={25} color={color} />;
        },
        headerShown: false,
      }}
    />

    <Tab.Screen
      name={'Profile'}
      component={HomeScreen}
      options={{
        // eslint-disable-next-line react/no-unstable-nested-components
        tabBarIcon: ({color}) => {
          return <EvilIcons name="user" size={25} color={color} />;
        },
        headerShown: false,
      }}
    />
  </Tab.Navigator>
);

export default HomeTabNavigator;
