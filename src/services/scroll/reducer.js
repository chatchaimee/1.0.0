import * as actionTypes from './actionTypes';

const initialState = {
	scroll: false,
	activeTab: 0
};

function reducer (state = initialState, action) {
	switch (action.type) {
		case actionTypes.START_SCROLL:
			return {
				...state,
				scroll: true
			};
		case actionTypes.STOP_SCROLL:
			return {
				...state,
				scroll: false
			};
		case actionTypes.ACTIVE_TAB:
			return {
				...state,
				activeTab: action.payload.activeTab
			};
		default:
			return state;
	}
}

export default reducer;
