import React, {useState} from 'react';
import {View, TextInput, FlatList, Text} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import styles from './styles';

import searchResults from '../../../assets/data/search';

const DestinationSearchScreen = props => {
  const [inputText, setInputText] = useState('');
  return (
    <View style={styles.container}>
      {/* Input components */}
      <TextInput
        style={styles.textInput}
        placeholder="Bạn muốn đi đâu?"
        value={inputText}
        onChangeText={setInputText}
      />
      {/* List of destination */}
      <FlatList
        data={searchResults}
        renderItem={({item}) => (
          <View style={styles.row}>
            <View style={styles.iconContainer}>
              <Ionicons name={'ios-location-sharp'} size={26} />
            </View>
            <Text style={styles.locationText}>{item.description}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default DestinationSearchScreen;
