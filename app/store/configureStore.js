import { AsyncStorage } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { persistStore, autoRehydrate } from 'redux-persist';
import rootReducer from '../reducers';

const middleWare = [];
const storeWithMiddleWare = applyMiddleware(...middleWare)(createStore);
const transientState = ['homeNavReducer', 'mainNavReducer'];

export default configureStore = (onComplete) => {
	const store = autoRehydrate()(storeWithMiddleWare)(rootReducer);
	persistStore(store, { blacklist: transientState, storage: AsyncStorage }, onComplete);
	return store;
};
