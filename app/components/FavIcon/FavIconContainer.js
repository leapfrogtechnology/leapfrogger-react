import { connect } from 'react-redux';
import FavIcon from './FavIcon';
import { makeFavourite, removeFavourite } from '../../actions/favouriteActions';

function mapStateToProps (state) {
  return {
    favourites: state.favouriteReducer
  }
}

export default connect(
  mapStateToProps,
  {
    makeFavourite: (employeeId) => makeFavourite(employeeId),
    removeFavourite: (employeeId) => removeFavourite(employeeId),
  }
)(FavIcon)