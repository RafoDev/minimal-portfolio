import sharedStyles from '../../styles/shared.module.css';
import styles from './Skills.module.css';

export const Skills = ({ data }) => {
	return (
		<section>
			<h3 className={`${sharedStyles.title} ${styles.title}`}>Skills</h3>
			<div className={styles.skills}>
				{data.skills.map((skill) => (
					<p key={skill} className={styles.skill}>
						{skill}
					</p>
				))}
			</div>
		</section>
	);
};
