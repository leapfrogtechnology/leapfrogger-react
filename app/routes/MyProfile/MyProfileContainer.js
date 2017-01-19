import { connect } from 'react-redux';
import MyProfile from './MyProfile';

function mapStateToProps (state) {
  return {
    employee: state.employeeReducer.employees.find((emp) => {
    	return emp.empId == 161
    })
  }
}

export default connect(
  mapStateToProps,{

  }
)(MyProfile)