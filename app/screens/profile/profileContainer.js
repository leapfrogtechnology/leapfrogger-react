import { connect } from 'react-redux';

import ProfileScreen from './profile';
import { logoutAction } from 'App/actions';
import { LF_API_KEY } from 'App/constants/credentials';
import * as fetchActions from 'App/actions/fetchActions'; 
import * as employeeActions from 'App/actions/employeeActions'; 

const mapStateToProps = (state) => ({
  me: state.rootReducer.user.myProfile,
  isFetching: state.rootReducer.user.isFetching,
  favEmployees: state.rootReducer.employee.favoriteEmployees,  
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => { dispatch(logoutAction()) },
  setFavEmployees: (emp) => { dispatch(employeeActions.favoriteTheEmployee(emp)) },
  fetchEmployeesAndDepartments: () => { dispatch(fetchActions.fetchEmployeesAndDepartmentsFromAPI(LF_API_KEY)) },  
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileScreen);
