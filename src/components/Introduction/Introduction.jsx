import styles from './Introduction.module.css';
import sharedStyles from '../../styles/shared.module.css';

export const Introduction = ({ data }) => {
	return (
		<section className={styles.introduction}>
			<h1 className={`${sharedStyles.title} ${styles.name}`}>{data.name}</h1>
			<p className={`${sharedStyles.paragraph} ${styles.intro}`}>
				{data.introduction}
			</p>
			<p className={`${styles.location}`}>{data.location}</p>

			<div className={styles.logos}>
				{data?.social.map((social, index) => (
					<a
						key={index}
						href={social.url}
						className={styles.logo}
						target="_blank"
					>
						<img
							src={social.logo}
							className={styles.logo__img}
							alt={social.name}
						/>
					</a>
				))}
			</div>

			<figure className={styles.profile}>
				<img
					src={data.avatarUrl}
					alt={`${data.name} profile photo.`}
					className={styles.profile__photo}
				/>
			</figure>
		</section>
	);
};
