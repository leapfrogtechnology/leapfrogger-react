import { connect } from 'react-redux';

import ContactScreen from './contact';
import { LF_API_KEY } from 'App/constants/credentials';
import * as fetchActions from 'App/actions/fetchActions'; 

const mapStateToProps = (state) => ({
  employees: state.rootReducer.user.employees,   
});

const mapDispatchToProps = (dispatch) => ({
  fetchEmployees: () => { dispatch(fetchActions.fetchEmployeeFromAPI(LF_API_KEY)) }  
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactScreen);
