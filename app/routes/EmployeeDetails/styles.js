import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  divider: {
    backgroundColor: 'green',
    height: 1,
    marginTop: 5,
    marginBottom: 5
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
    paddingLeft: 10,
    paddingRight: 10,
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
    paddingLeft: 5,
    paddingRight: 5
  },
  contactDetailsRow: {
    flexDirection: 'row',
    margin: 4
  },
  contactInfoContainer: {
    flexDirection: 'column',
    flex: 9
  },
  contactInfo: {
    fontSize: 14,
    lineHeight: 16,
  },
  contactInfoMore: {
    fontSize: 10,
    lineHeight: 12,
    color: '#9B9D9C'
  },
  contactRowImage: {
    height: 20,
    width: 20
  }
});

export default styles;
