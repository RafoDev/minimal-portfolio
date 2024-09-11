import React from 'react';
import styles from './CommandMenu.module.css';
import upLogo from '../../assets/keys/up.svg';
import downLogo from '../../assets/keys/down.svg';
import enterLogo from '../../assets/keys/enter.svg';

const Instruction = ({ keys = [], text }) => {
	return (
		<div className={styles.instruction}>
			{keys.map(key => {
				if (key.ref !== null) {
					return (
						<img
							key={key.ref}
							src={key.ref}
							alt={`${key.name} key`}
							className={styles.instruction__key}
						/>
					);
				} else {
					return <small key={key.ref} className={styles.instruction__key}>{key.name}</small>;
				}
			})}
			<p className={styles.instruction__text}>{text}</p>
		</div>
	);
};

export const CommandMenuInstructions = () => {
	return (
		<div className={styles.instructions}>
			<Instruction
				keys={[{ name: 'Enter', ref: enterLogo }]}
				text={'to select'}
			/>
			<Instruction
				keys={[
					{ name: 'Down', ref: downLogo },
					{ name: 'Up', ref: upLogo },
				]}
				text={'to navigate'}
			/>
			<Instruction
				keys={[{ name: 'esc', ref: null }]}
				text={'to close'}
			/>
		</div>
	);
};
