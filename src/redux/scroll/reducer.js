import { types } from './actions';

const initialState = {
	scroll: false,
	activeTab: 0
};

function reducer (state = initialState, action) {
	switch (action.type) {
		case types.START_SCROLL:
			return {
				...state,
				scroll: true
			};
		case types.STOP_SCROLL:
			return {
				...state,
				scroll: false
			};
		case types.ACTIVE_TAB:
			return {
				...state,
				activeTab: action.payload.activeTab
			};
		default:
			return state;
	}
}

export default reducer;
