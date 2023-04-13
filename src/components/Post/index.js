import React from 'react';
import {View, Text, Image} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

import styles from './style';

const Post = props => {
  const post = props.post;
  return (
    <View style={styles.container}>
      {/* Image */}
      <Image
        style={styles.image}
        source={{
          uri: post.image,
        }}
      />
      {/* Bed & bedroom */}
      <Text style={styles.bedrooms}>
        <Text style={styles.bed}>{post.bed} giường</Text>
        <Entypo name="dot-single" size={10} color={'#5b5b5b'} />
        <Text style={styles.room}>{post.bedroom} phòng</Text>
      </Text>
      {/* type & description */}
      <Text style={styles.descriptions} numberOfLines={2}>
        <Text style={styles.type}>{post.type}</Text>
        <Entypo name="dot-single" size={16} color={'#5b5b5b'} />
        <Text style={styles.description}>{post.title}</Text>
      </Text>
      {/* old price & new price */}
      <Text style={styles.prices}>
        <Text style={styles.oldPrice}>{post.oldPrice} đ</Text>
        <Text style={styles.price}> {post.newPrice} đ </Text>
        <Text>/ đêm</Text>
      </Text>
      {/* total price */}
      <Text style={styles.totalPrice}>Tổng {post.totalPrice} đ</Text>
    </View>
  );
};

export default Post;
