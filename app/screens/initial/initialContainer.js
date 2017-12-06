import { connect } from 'react-redux';

import InitialScreen from './initial';

const mapStateToProps = (state) => ({
  isLoggedIn: state.rootReducer.auth.loggedIn,
});

export default connect(
  mapStateToProps,
)(InitialScreen);
