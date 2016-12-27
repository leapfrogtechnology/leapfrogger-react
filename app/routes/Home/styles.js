import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginTop: 65,
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    height: 100,
    margin: 5,
    backgroundColor: 'rgba(0, 147, 209, 0.7)',
    borderRadius: 5,
  },
  image: {
    height: 100,
    borderRadius: 5
  },
  title: {
    fontSize: 20,
    color: '#222'
  }
});

export default styles;
