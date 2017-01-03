import { connect } from 'react-redux';
import GoogleSigninComponent from './GoogleSigninComponent';
import { logInSuccess, logOut } from '../../actions/userActions'


function mapStateToProps (state) {
  return {
    user: state.userReducer
  }
}

export default connect(
  mapStateToProps,
  {
    logInSuccess: (user) => logInSuccess(user),
    logOut: () => logOut(null)
  }
)(GoogleSigninComponent)