import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  divider: {
    backgroundColor: 'green',
    height: 1,
    marginTop: 5
  },
  headerContainer: {
    flex: 3
  },
  detailsContainer: {
    flex: 7,
    paddingTop: 20
  },
  headerBackgroundImage: {
    flex: 1,
    width: undefined,
    height: undefined,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerImageContainer: {
    alignItems: 'center'
  },
  headerImage: {
    height: 80,
    width: 80,
    borderRadius: 80
  },
  headerName: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center'
  },
  headerNameSub: {
    fontSize: 14,
    color: 'white',
    textAlign: 'center'
  },
  eachDetailsContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    padding: 10
  },
  phoneImageContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  phoneImage: {
    height: 25,
    width: 25,
    tintColor: 'green'
  },
  phoneDetails: {
    flex: 8,
    flexDirection: 'column',
    justifyContent: 'center',
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 5,
    paddingRight: 5
  },
  contactDetailsRow: {
    flexDirection: 'row',
    padding: 2
  },
  contactInfoContainer: {
    flexDirection: 'column',
    flex: 9
  },
  contactInfo: {
    fontSize: 12
  },
  contactInfoMore: {
    fontSize: 11
  },
  contactRowImage: {
    height: 20,
    width: 20
  },
  favIconContainer: {
    backgroundColor: '#FF5722',
    height: 50,
    width: 50,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: -20,
    right: 20,
  },
  favIcon: {
    height: 25,
    width: 25,
    tintColor: 'white'
  }
});

export default styles;
