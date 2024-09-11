import styles from './CommandMenu.module.css';

export const FilteredSection = ({
	sectionName,
	filteredOptions,
	initialIndex,
	optionIsSelected,
  onClickOption
}) => {

  let optionIndex = initialIndex; 

	return (
		<>
			{filteredOptions.length > 0 && (
				<small className={styles.result__section}>{sectionName}</small>
			)}
			{filteredOptions.map((option) => (
				<button
					tabIndex="-1"
					className={`${styles.result} ${
						optionIsSelected(optionIndex) ? styles['result--hover'] : ''
					}`}
					key={optionIndex++}
          onClick={() => onClickOption(option)}
				>
					{option.name}
				</button>
			))}
		</>
	);
};
