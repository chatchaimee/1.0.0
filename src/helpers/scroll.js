import { scroller, Events } from 'react-scroll';

function handleClickAndScrollToTarget (targetName, { duration, smooth, offset }) {
	return scroller.scrollTo(targetName, {
		duration,
		smooth,
		offset
	});
}

export default handleClickAndScrollToTarget;
export const scrollEvents = Events.scrollEvent;
