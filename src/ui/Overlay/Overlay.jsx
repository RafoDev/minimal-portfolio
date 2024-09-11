import { useEffect, useRef } from 'react';
import styles from './Overlay.module.css';

export const Overlay = ({ onCloseOverlay, children }) => {
	const overlayRef = useRef();

	return (
		<>
			<div
				className={`${styles.overlay}`}
				ref={overlayRef}
				onClick={() => {
					setTimeout(onCloseOverlay, 250);
					if (overlayRef.current)
						overlayRef.current.classList.add(styles.close);
				}}
			>
				{children}
			</div>
		</>
	);
};
