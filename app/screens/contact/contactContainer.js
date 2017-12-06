import { connect } from 'react-redux';

import ContactScreen from './contact';

const mapStateToProps = (state) => ({
  loggedIn: state.rootReducer.auth.loggedIn, 
  user: state.rootReducer.auth.user,   
});

export default connect(
  mapStateToProps,
)(ContactScreen);
