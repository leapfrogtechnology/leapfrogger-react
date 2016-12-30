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
  phoneDetailsContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    flex: 1,
    borderWidth: 1,
    borderColor: 'red'
  },
  phoneImageContainer: {
    flex: 2,
    borderWidth: 1,
    borderColor: 'red'
  },
  phoneDetails: {
    flex: 8,
    borderWidth: 1,
    borderColor: 'red'
  },
  emailDetailsContainer: {
    flexDirection: 'row',
    flex: 1,
    borderWidth: 1,
    borderColor: 'red'
  },
  skypeDetailsContainer: {
    flexDirection: 'row',
    flex: 1,
    borderWidth: 1,
    borderColor: 'red'
  },
  addressDetailsContainer: {
    flexDirection: 'row',
    flex: 1,
    borderWidth: 1,
    borderColor: 'red'
  },

});

export default styles;
