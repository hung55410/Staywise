import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderColor: '#ededed',
    marginHorizontal: 20,
  },
  title: {
    fontWeight: 500,
    fontSize: 18,
    marginBottom: 6,
  },
  caption: {
    color: '#5d5d5d',
    fontSize: 16,
  },
  buttons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    borderWidth: 1,
    width: 32,
    height: 32,
    borderRadius: 30,
    borderColor: '#5d5d5d',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    marginHorizontal: 15,
    fontSize: 20,
  },
});

export default styles;
