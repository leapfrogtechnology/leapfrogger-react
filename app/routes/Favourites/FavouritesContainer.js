import { connect } from 'react-redux';
import Favourites from './Favourites';
import { navigatePage } from '../../actions/mainNavActions';

function mapStateToProps (state) {
  return {
    favouriteEmployees: state.employeeReducer.employees.filter((employee) => {
    	return employee.isFavourite
    })
  }
}

export default connect(
  mapStateToProps,
  {
    navigatePage: (page) => navigatePage(page)
  }
)(Favourites)