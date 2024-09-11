import { useState } from 'react';

export const useOverlay = (initialState = false) => {
	const [overlayState, setOverlayState] = useState(false);

	const scrollbarWidth =
		window.innerWidth - document.documentElement.clientWidth;

	const onOpenOverlay = () => {
		document.body.style.paddingRight = `${scrollbarWidth}px`;
		document.body.style.overflow = 'hidden';
		setOverlayState(true);
	};
	const onCloseOverlay = () => {
    document.body.style.paddingRight = '';
		document.body.style.overflow = '';
		setOverlayState(false);
	};

	return {
		overlayState,
		onOpenOverlay,
		onCloseOverlay,
	};
};
