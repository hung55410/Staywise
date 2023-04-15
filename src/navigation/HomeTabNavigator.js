import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

import HomeScreen from '../screens/Home';
import ExploreNavigator from '../navigation/ExploreNavigtor';

const Tab = createBottomTabNavigator();

const HomeTabNavigator = props => (
  <Tab.Navigator
    screenOptions={{
      activeTintColor: '#5FAE57',
    }}>
    <Tab.Screen
      name={'Explore'}
      component={ExploreNavigator}
      options={{
        // eslint-disable-next-line react/no-unstable-nested-components
        tabBarIcon: ({color}) => {
          return <Fontisto name="search" size={25} color={color} />;
        },
        headerShown: false,
        tabBarLabel: 'Khám phá',
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
        tabBarLabel: 'Yêu thích',
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
        tabBarLabel: 'Tin nhắn',
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
        tabBarLabel: 'Tài khoản',
      }}
    />
  </Tab.Navigator>
);

export default HomeTabNavigator;
