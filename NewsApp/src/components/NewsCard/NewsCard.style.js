import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
    margin: 10,
    borderWidth: 1,
    borderColor: 'orange',
    borderRadius: 10,
  },

  image: {
    height: Dimensions.get('window').height / 4,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },

  title: {
    fontWeight: 'bold',
    fontSize: 20,
  },

  description: {
    marginTop: 10,
  },

  author: {
    alignSelf: 'flex-end',
    fontStyle: 'italic',
  },

  inner_container: {
    padding: 7,
  },
});
