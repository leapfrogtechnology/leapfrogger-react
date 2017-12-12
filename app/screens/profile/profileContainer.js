import { connect } from 'react-redux';

import ProfileScreen from './profile';
import { logoutAction } from 'App/actions';
import { LF_API_KEY } from 'App/constants/credentials';
import * as fetchActions from 'App/actions/fetchActions'; 

const mapStateToProps = (state) => ({
  me: state.rootReducer.user.myProfile,
  isFetching: state.rootReducer.user.isFetching,  
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => { dispatch(logoutAction()) },
  fetchEmployeesAndDepartments: () => { dispatch(fetchActions.fetchEmployeesAndDepartmentsFromAPI(LF_API_KEY)) },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileScreen);
