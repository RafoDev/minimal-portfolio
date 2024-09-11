import styles from './Experience.module.css';
import sharedStyles from '../../styles/shared.module.css';

const rolesFormated = (roles = []) => {
	let rolesFormated = '';

	for (let i = 0; i < roles.length - 1; i++) rolesFormated += roles[i] + ' | ';

	rolesFormated += roles[roles.length - 1];

	return rolesFormated;
};

export const Experience = ({ data }) => {
	return (
		<section className={styles.workexperience}>
			<h2 className={`${sharedStyles.title} ${styles.title}`}>
				Work Experience
			</h2>
			<section className={styles.experiences}>
				{data.experience.map((experience, index) => (
					<article key={index} className={styles.experience}>
						<h3 className={styles.experience__title}>
							{experience.name}
							{experience.remote && (
								<small className={styles.experience__remote}>Remote</small>
							)}
						</h3>
						<div className={styles.experience__roles}>
							{rolesFormated(experience.roles)}
						</div>

						<p
							className={styles.experience__timestamp}
						>{`${experience.startYear} - ${experience.endYear}`}</p>
						<p
							className={`${sharedStyles.paragraph} ${styles.experience__desc}`}
						>
							{experience.description}
						</p>
					</article>
				))}
			</section>
		</section>
	);
};
