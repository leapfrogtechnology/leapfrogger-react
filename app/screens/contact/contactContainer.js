import { connect } from 'react-redux';

import ContactScreen from './contact';
import { LF_API_KEY } from 'App/constants/credentials';
import * as fetchActions from 'App/actions/fetchActions'; 

const mapStateToProps = (state) => ({
  employees: state.rootReducer.user.employees,
  departments: state.rootReducer.department.departments,
  groupedEmp: state.rootReducer.employee.groupedEmployees,
  isFetching: state.rootReducer.user.isFetching,   
});

const mapDispatchToProps = (dispatch) => ({
  fetchEmployeesAndDepartments: () => { dispatch(fetchActions.fetchEmployeesAndDepartmentsFromAPI(LF_API_KEY)) },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactScreen);
