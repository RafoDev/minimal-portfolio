import styles from './CommandMenu.module.css';
import Search from '../../assets/search.svg';
import Close from '../../assets/close.svg';
import { useEffect, useRef } from 'react';

export const CommandInput = ({ searchTerm, handleChange, onCloseOverlay }) => {
	const inputRef = useRef(null);

	useEffect(() => {
		if (inputRef.current) {
			inputRef.current.focus();
		}
	}, []);

	return (
		<div className={styles['input-container']}>
			<img src={Search} alt="Search" className={styles['menu__search-logo']} />
			<input
				ref={inputRef}
				type="text"
				placeholder="Search a command"
				value={searchTerm}
				onChange={handleChange}
				className={styles['menu__input']}
			/>
			<img
				src={Close}
				alt="Close"
				className={styles['menu__close-logo']}
				onClick={onCloseOverlay}
			/>
		</div>
	);
};
