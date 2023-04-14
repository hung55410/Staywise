import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 500,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  title: {
    fontSize: 55,
    fontWeight: 800,
    color: 'white',
    width: '70%',
    marginLeft: 25,
  },
  button: {
    backgroundColor: '#fff',
    width: 200,
    height: 44,
    marginLeft: 25,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 600,
  },
  searchButton: {
    backgroundColor: '#FFF',
    height: 52,
    width: Dimensions.get('screen').width - 50,
    borderRadius: 100,
    justifyContent: 'center',
    marginHorizontal: 25,
    alignItems: 'center',
    flexDirection: 'row',
    position: 'absolute',
    top: 50,
    zIndex: 10,
  },
  searchButtonText: {
    fontSize: 16,
    fontWeight: 600,
    paddingLeft: 12,
  },
});

export default styles;
