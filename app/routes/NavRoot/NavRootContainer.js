import { connect } from 'react-redux';
import NavigationRoot from './NavRoot';
import { push, pop } from '../../actions/navActions';
import { loadedEmployees } from '../../actions/employeeActions';

function mapStateToProps (state) {
  return {
    navigation: state.navReducer,
    employees: state.employeeReducer
  }
}

export default connect(
  mapStateToProps,
  {
    pushRoute: (route) => push(route),
    popRoute: () => pop(),
    loadedEmployees: (employees) => loadedEmployees(employees)
  }
)(NavigationRoot)