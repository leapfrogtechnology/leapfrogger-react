import { connect } from 'react-redux';

import ProfileScreen from './profile';
import { logoutAction } from 'App/actions';
import * as fetchActions from 'App/actions/fetchActions'; 

const mapStateToProps = (state) => ({
  me: state.rootReducer.user.myProfile,     
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => { dispatch(logoutAction()) }  
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileScreen);
