import { connect } from 'react-redux';
import GoogleSigninComponent from './GoogleSigninComponent';
import { logInSuccess, logOut } from '../../actions/userActions'


function mapStateToProps (state) {
	console.log('atti k', state)
  return {
    session: state.userReducer
  }
}

export default connect(
  mapStateToProps,
  {
    logInSuccess: (user) => logInSuccess(user),
    logOut: () => logOut(null)
  }
)(GoogleSigninComponent)