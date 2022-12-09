import React from "react";

const getTouchEventData = (
	e:
		| TouchEvent
		| MouseEvent
		| React.TouchEventHandler<HTMLElement>
		| React.MouseEvent<HTMLElement>
) => {
	return 'changedTouches' in e ? e.targetTouches[0] : e;
};

export default getTouchEventData;
