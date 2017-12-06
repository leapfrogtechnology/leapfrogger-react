import { connect } from 'react-redux';

import LoginScreen from './login';
import { loginAction } from 'App/actions';

const mapStateToProps = (state) => ({
  isLoggedIn: state.rootReducer.auth.loggedIn,
});

const mapDispatchToProps = (dispatch) => ({
  onLogin: (user) => { dispatch(loginAction(user)) }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginScreen);
