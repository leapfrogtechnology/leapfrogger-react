import { connect } from 'react-redux';

import LoginScreen from './login';
import { loginAction } from 'App/actions';

const mapStateToProps = (state) => ({
  isLoggedIn: state.rootReducer.auth.loggedIn,
  user: state.rootReducer.auth.user,
});

const mapDispatchToProps = (dispatch) => ({
  onLogin: (user) => { dispatch(loginAction(user)) }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginScreen);
