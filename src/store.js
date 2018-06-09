import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import reducer from '~/src/services/reducer';

function initStore (initialState) {
	return createStore(
		reducer,
		initialState,
		composeWithDevTools(applyMiddleware(thunkMiddleware))
	);
}

export default initStore;
