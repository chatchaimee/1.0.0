import { scroller, Events } from 'react-scroll';

export const handleClickAndScrollToTarget = (
  targetName,
  { duration, smooth, offset }
) =>
  scroller.scrollTo(targetName, {
    duration: duration,
    smooth: smooth,
    offset: offset
  });

export const scrollEvents = Events.scrollEvent;
