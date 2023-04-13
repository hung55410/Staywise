/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';

// import HomeScreen from './src/screens/Home';
import Post from './src/components/Post';

import feed from './assets/data/feed';

const post1 = feed[0];

function App(): JSX.Element {
  return (
    <>
      <StatusBar barStyle={'dark-content'} />
      <SafeAreaView>
        {/* <HomeScreen /> */}
        <Post post={post1} />
      </SafeAreaView>
    </>
  );
}

export default App;
