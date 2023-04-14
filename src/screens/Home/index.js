import React from 'react';
import {View, Text, ImageBackground, Pressable} from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {useNavigation} from '@react-navigation/native';

import styles from './styles';

const HomeScreen = props => {
  const navigation = useNavigation();

  return (
    <View>
      <Pressable
        style={styles.searchButton}
        onPress={() => navigation.navigate('Destinstion search')}>
        <Fontisto name="search" size={20} color={'#5FAE57'} />
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
