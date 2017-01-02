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
    flex: 3,
    backgroundColor: '#84827B',
    justifyContent: 'center',
    alignItems: 'center'
  },
  detailsContainer: {
    flex: 7
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
    textAlign: 'center'
  },
  headerNameSub: {
    fontSize: 14,
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
  }
});

export default styles;
