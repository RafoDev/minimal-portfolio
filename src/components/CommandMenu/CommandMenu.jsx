import styles from './CommandMenu.module.css';
import Command from '../../assets/command.svg';

import { useEffect, useState } from 'react';
import { Overlay, useOverlay } from '../../ui';
import { CommandInput } from './CommandInput';
import { useKeyNavigation } from '../../hooks';
import { FilteredSection } from './FilteredSection';
import { CommandMenuInstructions } from './CommandMenuInstructions';


const onClickAction = (action) => {
	action.action();
};
const onClickLink = (link) => {
	window.open(link.url, '_blank');
};

const onSelectOption = (option) => {
	if (option.hasOwnProperty('action')) {
		option.action();
	}
	if (option.hasOwnProperty('url')) {
		window.open(option.url, '_blank');
	}
};

export const CommandMenu = ({options}) => {
	const { actions, links } = options;
	const [searchTerm, setSearchTerm] = useState('');
	const { overlayState, onOpenOverlay, onCloseOverlay } = useOverlay(false);
	const { menuRef, optionIsSelected, setTrigger } = useKeyNavigation(
		[...actions, ...links],
		onSelectOption
	);

	const handleChange = (e) => {
		setSearchTerm(e.target.value.toLowerCase());
	};

	const filteredActions = actions.filter((action) =>
		action.name.toLowerCase().includes(searchTerm)
	);

	const filteredLink = links.filter((link) =>
		link.name.toLowerCase().includes(searchTerm)
	);

	const handleOpenMenu = (e) => {
		if (e.ctrlKey && e.key === 'k') {
			e.preventDefault();
			setTrigger((trigger) => !trigger);
			onOpenOverlay();
		}
		if(e.key === 'Escape'){
			e.preventDefault();						
			onCloseOverlay();
		}
	};

	useEffect(() => {
		window.addEventListener('keydown', handleOpenMenu);

		return () => {
			window.removeEventListener('keydown', handleOpenMenu);
		};
	}, []);

	return (
		<>
			<button
				className={styles['btn']}
				onClick={() => {
					setTrigger((trigger) => !trigger);
					onOpenOverlay();
				}}
			>
				<img
					src={Command}
					alt="Command Button"
					className={styles['btn__logo']}
				/>
			</button>

			<footer className={styles.footer}>
				<p className={styles.footer__text}>Press <small className={styles.footer__small}>Ctrl</small> + <small className={styles.footer__small}>k</small> to open the command menu</p>
			</footer>

			{overlayState && (
				<Overlay onCloseOverlay={onCloseOverlay}>
					<div
						className={styles.menu}
						ref={menuRef}
						tabIndex="0"
						onClick={(e) => {
							e.stopPropagation();
						}}
					>
						<CommandInput
							handleChange={handleChange}
							searchTerm={searchTerm}
							onCloseOverlay={onCloseOverlay}
						/>

						<div className={styles.results}>
							<FilteredSection
								sectionName={'Actions'}
								filteredOptions={filteredActions}
								initialIndex={0}
								optionIsSelected={optionIsSelected}
								onClickOption={onClickAction}
							/>

							<FilteredSection
								sectionName={'Links'}
								filteredOptions={filteredLink}
								initialIndex={filteredActions.length}
								optionIsSelected={optionIsSelected}
								onClickOption={onClickLink}
							/>
						</div>
					<CommandMenuInstructions/>
					</div>
				</Overlay>
			)}
		</>
	);
};
