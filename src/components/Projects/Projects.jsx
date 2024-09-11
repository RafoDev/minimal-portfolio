import sharedStyles from '../../styles/shared.module.css';
import styles from './Projects.module.css';

export const Projects = ({ data }) => {
	return (
		<section className={styles['projects-section']}>
			<h3 className={`${sharedStyles.title} ${styles.title}`}>Projects</h3>
			<section className={styles.projects}>
				{data.projects.map((project, index) => (
					<article key={index} className={styles.project}>
						<a href="#" className={styles.project__title}>
							{project.name}
						</a>
						<p className={`${sharedStyles.paragraph} ${styles.project__desc}`}>
							{project.description}
						</p>
						<div className={styles.project__techs}>
							{
								project.stack.map((tech) => (
									<div key={tech} className={styles.project__tech}>{tech}</div>
								))
							}
						</div>
					</article>
				))}
			</section>
		</section>
	);
};
