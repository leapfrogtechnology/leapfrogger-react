import { connect } from 'react-redux';

import InitialScreen from './initial';
// import { loginAction } from './../../actions';

const mapStateToProps = (state) => ({
  isLoggedIn: state.auth.loggedIn,
});

export default connect(
  mapStateToProps,
)(InitialScreen);
