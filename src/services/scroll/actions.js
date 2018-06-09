import * as actionTypes from './actionTypes';

function startScroll () {
	return {
		type: actionTypes.START_SCROLL
	};
}

function stopScroll () {
	return {
		type: actionTypes.STOP_SCROLL
	};
}

function setActiveTab (activeTab) {
	return {
		type: actionTypes.ACTIVE_TAB,
		payload: {
			activeTab
		}
	};
}

function handleSetActiveTabOnScroll (menus, dispatch) {
	const components = document.querySelectorAll('.component');
	const componentPositions = [];
	const { documentElement, body } = document;
	const scrollPosition = documentElement.scrollTop || body.scrollTop;
	let activeTab = 0;

	components.forEach((e) => {
		componentPositions[e.id] = e.offsetTop - 200; // set position offsetTop
	});

	for (const i in componentPositions) {
		if (componentPositions[i] <= scrollPosition) {
			const menu = document.querySelector(`button[to*=${i}]`);

			if (menu !== null) {
				activeTab = menus.indexOf(menu.getAttribute('to'));
			}
		}
	}

	dispatch(setActiveTab(activeTab));
}

function handleScroll (menus = null) {
	return (dispatch) => {
		if (window.scrollY > 0) {
			dispatch(startScroll());
		} else {
			dispatch(stopScroll());
		}

		if (menus) {
			handleSetActiveTabOnScroll(menus, dispatch);
		}
	};
}

export default handleScroll;
