import { combineReducers } from 'redux';
import scrollReducer from '~/app/modules/scroll/reducer';

export default combineReducers({
	scroll: scrollReducer,
});
