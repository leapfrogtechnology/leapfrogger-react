import { connect } from 'react-redux';

import ProfileScreen from './profile';
import { logoutAction } from 'App/actions';

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => { dispatch(logoutAction()) }  
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileScreen);
