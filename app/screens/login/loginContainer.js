import { connect } from 'react-redux';

import LoginScreen from './login';
import { loginAction } from './../../actions';

const mapStateToProps = (state) => ({
  isLoggedIn: state.auth.loggedIn,
  user: state.auth.data,
});

const mapDispatchToProps = (dispatch) => ({
  onLogin: (user) => { dispatch(loginAction(user)) }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginScreen);
