import styles from './Education.module.css';
import sharedStyles from '../../styles/shared.module.css';

const timestampConstructor = (experienceItem) => {
	const {startYear, endYear, expected} = experienceItem;

	if(expected){
		return `${endYear} (expected)`;
	}
	if(endYear === null){
		return `${startYear}`;
	}
	return `${startYear} - ${endYear}`;
}

export const Education = ({ data }) => {
	return (
		<section>
			<h2 className={`${sharedStyles.title} ${styles.title}`}>Education</h2>
			<section className={styles['education-list']}>
				{data.education.map((item, index) => (
					<article key={index} className={styles.education__item}>
						<h3 className={styles.education__institution}>{item.name}</h3>
						<p className={styles.education__timestamp}>{timestampConstructor(item)}</p>
						<p
							className={`${sharedStyles.paragraph} ${styles.education__desc}`}
						>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio
							soluta, eaque ipsam voluptates similique amet obcaecati
							consequuntur impedit velit corrupti!
						</p>
					</article>
				))}
			</section>
		</section>
	);
};
