import React from 'react';
import {View, Text, ImageBackground, Pressable} from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';

import styles from './styles';

const HomeScreen = props => {
  return (
    <View>
      <Pressable
        style={styles.searchButton}
        onPress={() => console.warn('button search clicked')}>
        <Fontisto name="search" size={25} color={'#f15454'} />
        <Text style={styles.searchButtonText}>Bạn muốn đi đâu?</Text>
      </Pressable>

      <ImageBackground
        source={require('../../../assets/images/wallpaper.jpg')}
        style={styles.image}>
        <Text style={styles.title}>Wise Wander</Text>

        <Pressable
          style={styles.button}
          onPress={() => console.warn('button kham pha ngay clicked')}>
          <Text style={styles.buttonText}>Khám phá ngay!</Text>
        </Pressable>
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;
