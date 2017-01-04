import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  employeeRowContainer: {
    height: 48,
    padding: 4,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  employeeRow: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 2
  },
  image: {
    height: 36,
    width: 36,
    borderRadius: 20
  },
  titleContainer: {
    flex: 9
  },
  title: {
    fontSize: 16,
    color: '#222'
  },
  searchBar: {
    borderColor: 'rgba(0, 147, 209, 0.7)'
  },
  favIconContainer: {
    flex: 1
  },
  favIcon: {
    tintColor: '#AAA9A9',
  }
});

export default styles;
