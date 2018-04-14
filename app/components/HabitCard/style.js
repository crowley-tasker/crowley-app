import { StyleSheet, Dimensions } from 'react-native';

const { height, width } = Dimensions.get('screen');

export default StyleSheet.create({
  container: {
    // justifyContent: 'center',
    // alignItems: 'center',
    height: 120,
    width: width - 15,
    backgroundColor: '#fff',
    borderRadius: 2,
    marginTop: 10,
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 16,
    color: '#000',
    fontWeight: 'bold',
    marginTop: 5,
    marginLeft: 10,
  },
});
