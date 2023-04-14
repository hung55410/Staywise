import React, {useState} from 'react';
import {View, Text, Pressable} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

import styles from './styles';

const GuestsScreen = props => {
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);
  const navigation = useNavigation();
  return (
    <View style={styles.mainContainer}>
      <View>
        {/* Row 1: adults */}
        <View style={styles.container}>
          {/* Title */}
          <View>
            <Text style={styles.title}>Người lớn</Text>
            <Text style={styles.caption}>Từ 13 tuổi trở lên</Text>
          </View>
          {/* button & values */}
          <View style={styles.buttons}>
            <Pressable
              onPress={() => setAdults(Math.max(0, adults - 1))}
              style={styles.button}>
              <Ionicons name={'remove'} size={20} />
            </Pressable>

            <Text style={styles.buttonText}>{adults}</Text>

            <Pressable
              onPress={() => setAdults(adults + 1)}
              style={styles.button}>
              <Ionicons name={'add'} size={20} />
            </Pressable>
          </View>
        </View>

        {/* Row 2: chidren */}
        <View style={styles.container}>
          {/* Title */}
          <View>
            <Text style={styles.title}>Trẻ em</Text>
            <Text style={styles.caption}>Từ 2 đến 12 tuổi</Text>
          </View>
          {/* button & values */}
          <View style={styles.buttons}>
            <Pressable
              onPress={() => setChildren(Math.max(0, children - 1))}
              style={styles.button}>
              <Ionicons name={'remove'} size={20} />
            </Pressable>

            <Text style={styles.buttonText}>{children}</Text>

            <Pressable
              onPress={() => setChildren(children + 1)}
              style={styles.button}>
              <Ionicons name={'add'} size={20} />
            </Pressable>
          </View>
        </View>

        {/* Row 3: infants */}
        <View style={styles.container}>
          {/* Title */}
          <View>
            <Text style={styles.title}>Trẻ sơ sinh</Text>
            <Text style={styles.caption}>Dưới 2 tuổi</Text>
          </View>
          {/* button & values */}
          <View style={styles.buttons}>
            <Pressable
              onPress={() => setInfants(Math.max(0, infants - 1))}
              style={styles.button}>
              <Ionicons name={'remove'} size={20} />
            </Pressable>

            <Text style={styles.buttonText}>{infants}</Text>

            <Pressable
              onPress={() => setInfants(infants + 1)}
              style={styles.button}>
              <Ionicons name={'add'} size={20} />
            </Pressable>
          </View>
        </View>
      </View>

      <Pressable
        onPress={() => navigation.navigate()}
        style={styles.buttonSearch}>
        <Text style={styles.buttonSearchText}>Tìm kiếm</Text>
      </Pressable>
    </View>
  );
};

export default GuestsScreen;
