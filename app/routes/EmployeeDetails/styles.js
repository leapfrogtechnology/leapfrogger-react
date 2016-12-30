import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  title: {
    fontSize: 25
  },
  subTitle: {
    fontSize: 20
  },
  headerContainer: {
    flex: 3,
    backgroundColor: '#84827B',
    padding: 20
  },
  detailsContainer: {
    flex: 7,
    borderWidth: 1,
    borderColor: 'red'
  },
  headerImageContainer: {
    alignItems: 'center'
  },
  headerImage: {
    height: 80,
    width: 80,
    borderRadius: 80
  },
  headerNameContainer: {
    flex: 1
  },
  headerName: {
    fontSize: 18,
    textAlign: 'center'
  },
  phoneDetailsContainer: {},
  emailDetailsContainer: {},
  skypeDetailsContainer: {},
  addressDetailsContainer: {}
});

export default styles;
