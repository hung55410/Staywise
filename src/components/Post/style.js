import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  image: {
    width: '100%',
    aspectRatio: 3 / 2,
    resizeMode: 'cover',
    borderRadius: 8,
  },
  bedrooms: {
    marginVertical: 10,
    color: '#5b5b5b',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  descriptions: {
    fontSize: 18,
    lineHeight: 26,
  },
  description: {
    letterSpacing: 0.7,
    fontWeight: 600,
  },
  prices: {
    fontSize: 18,
    marginVertical: 10,
  },
  oldPrice: {
    color: '#5b5b5b',
    textDecorationLine: 'line-through',
    fontSize: 16,
  },
  price: {
    fontWeight: 'bold',
  },
  totalPrice: {
    color: '#5FAE57',
    textDecorationLine: 'underline',
    fontSize: 16,
    fontWeight: 500,
  },
});

export default styles;
