import { connect } from 'react-redux';

import SearchContactView from './searchContact';

const mapStateToProps = (state) => ({
  employees: state.rootReducer.user.employees,  
});

export default connect(
  mapStateToProps,
)(SearchContactView);
