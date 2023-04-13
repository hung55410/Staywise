/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';

// import HomeScreen from './src/screens/Home';
// import SearchResultsScreen from './src/screens/SearchResults';
// import Post from './src/components/Post';
// import DestinationSearchScreen from './src/screens/DestinationSearch';
import GuestsScreen from './src/screens/Guests';

// import feed from './assets/data/feed';

// const post1 = feed[0];

function App(): JSX.Element {
  return (
    <>
      <StatusBar barStyle={'dark-content'} />
      <SafeAreaView>
        {/* <HomeScreen /> */}
        {/* <Post post={post1} /> */}
        {/* <SearchResultsScreen /> */}
        {/* <DestinationSearchScreen /> */}
        <GuestsScreen />
      </SafeAreaView>
    </>
  );
}

export default App;
