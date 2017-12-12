import { combineReducers } from 'redux';
import auth from './auth';
import user from './user';
import employee from './employee';
import department from './department';

const rootReducer = combineReducers({
    auth,
    user,
    employee,
    department,
});

export default { rootReducer };
