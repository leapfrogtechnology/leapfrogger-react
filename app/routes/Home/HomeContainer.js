import { connect } from 'react-redux';
import Home from './Home';
import { push, pop } from '../../actions/homeNavActions';
import { loadedEmployees } from '../../actions/employeeActions';

function mapStateToProps (state) {
  return {
    homeNavigation: state.homeNavReducer,
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
)(Home)