import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import SearchResultsScreen from '../screens/SearchResults';

const Tab = createMaterialTopTabNavigator();

const SearchResultsTabNavigator = props => (
  <Tab.Navigator
    screenOptions={{
      activeTintColor: '#5fae57',
      tabBarIndicatorStyle: {
        backgroundColor: '#5fae57',
      },
    }}>
    <Tab.Screen name={'list'} component={SearchResultsScreen} />
    <Tab.Screen name={'map'} component={SearchResultsScreen} />
  </Tab.Navigator>
);

export default SearchResultsTabNavigator;
