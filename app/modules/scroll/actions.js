import * as actionTypes from './types';

const startScroll = () => ({
  type: actionTypes.START_SCROLL
});

const stopScroll = () => ({
  type: actionTypes.STOP_SCROLL
});

const setActiveTab = activeTab => ({
  type: actionTypes.ACTIVE_TAB,
  payload: {
    activeTab: activeTab
  }
});

const handleSetActiveTabOnScroll = (menus, dispatch) => {
  const components = document.querySelectorAll('.component');
  const componentPositions = [];
  let scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
  let i = 0;
  let activeTab = 0;

  components.forEach(
    e => (componentPositions[e.id] = e.offsetTop - 200) // set position offsetTop
  );

  for (i in componentPositions) {
    let menu = document.querySelector(`button[to*=${i}]`);

    if (componentPositions[i] <= scrollPosition && menu !== null)
      activeTab = menus.indexOf(menu.getAttribute('to'));
  }

  dispatch(setActiveTab(activeTab));
};

export const handleScroll = (menus = null) => dispatch => {
  if (window.scrollY > 0) {
    dispatch(startScroll());
  } else {
    dispatch(stopScroll());
  }

  if (menus) handleSetActiveTabOnScroll(menus, dispatch);
};
