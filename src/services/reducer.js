import { combineReducers } from 'redux';
import scrollReducer from './scroll/reducer';

export default combineReducers({
	scroll: scrollReducer
});
