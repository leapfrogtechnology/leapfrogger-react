import { connect } from 'react-redux';

import LoginScreen from './login';
import * as actions from 'App/actions';
import * as fetchActions from 'App/actions/fetchActions'; 

const mapStateToProps = (state) => ({
  isLoggedIn: state.rootReducer.auth.loggedIn,
  isEmailValid: state.rootReducer.user.isValid,
});

const mapDispatchToProps = (dispatch) => ({
  onLogin: (user) => { dispatch(actions.loginAction(user)) },
  validateEmail: (token) => { dispatch(fetchActions.validateEmail(token)) }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginScreen);
