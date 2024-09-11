import styles from './About.module.css';
import sharedStyles from '../../styles/shared.module.css';

export const About = ({ data }) => {
	return (
		<section className={styles.about}>
			<h2 className={` ${sharedStyles.title} ${styles.title}`}>About</h2>
			<p className={` ${sharedStyles.paragraph} ${styles.aboutme}`}>
				{data.about}
			</p>
		</section>
	);
};
