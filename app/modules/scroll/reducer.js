import * as actionTypes from './types';

const initialState = {
  windowScroll: false,
  activeTab: 0
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.START_SCROLL:
      return {
        ...state,
        windowScroll: true
      };
    case actionTypes.STOP_SCROLL:
      return {
        ...state,
        windowScroll: false
      };
    case actionTypes.ACTIVE_TAB:
      return {
        ...state,
        activeTab: action.payload.activeTab
      };
    default:
      return state;
  }
};

export default reducer;
