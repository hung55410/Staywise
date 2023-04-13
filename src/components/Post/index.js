import React from 'react';
import {View, Text, Image} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

import styles from './style';

const Post = props => {
  return (
    <View style={styles.container}>
      {/* Image */}
      <Image
        style={styles.image}
        source={{
          uri: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80',
        }}
      />
      {/* Bed & bedroom */}
      <Text style={styles.bedrooms}>
        <Text style={styles.bed}>1 giường</Text>
        <Entypo name="dot-single" size={1} color={'#5b5b5b'} />
        <Text style={styles.room}>1 phòng</Text>
      </Text>
      {/* type & description */}
      <Text style={styles.descriptions} numberOfLines={2}>
        <Text style={styles.type}>Căn hộ</Text>
        <Entypo name="dot-single" size={16} color={'#5b5b5b'} />
        <Text style={styles.description}>
          Căn hộ được thiết kế tinh tế, không gian hiện đại, thoáng mát, trang
          trang bị đầy đủ tiện nghi mang lại sự thoải mái tiện lợi nhất cho
          khách hàng.
        </Text>
      </Text>
      {/* old price & new price */}
      <Text style={styles.prices}>
        <Text style={styles.oldPrice}>760.000 đ</Text>
        <Text style={styles.price}> 599.000 đ </Text>
        <Text>/ đêm</Text>
      </Text>
      {/* total price */}
      <Text style={styles.totalPrice}>Tổng 1.220.000 đ</Text>
    </View>
  );
};

export default Post;
