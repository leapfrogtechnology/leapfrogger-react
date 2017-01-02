import { connect } from 'react-redux';
import ApplicationShell from './ApplicationShell';
import { navigatePage } from '../../actions/mainNavActions';

function mapStateToProps (state) {
  return {
    mainNavigation: state.mainNavReducer
  }
}

export default connect(
  mapStateToProps,
  {
    navigatePage: (page) => navigatePage(page)
  }
)(ApplicationShell)