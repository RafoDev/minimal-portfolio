// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import React, { useState } from 'react';
import {
	Introduction,
	About,
	Experience,
	Education,
	Skills,
	Projects,
	CommandMenu,
} from './components';
import {  } from './components/Education';
import {
	aboutData,
	educationData,
	experienceData,
	introData,
	options,
	projects,
	skills,
} from './data/resume';

export const App = () => {
	const [darkTheme, setDarkTheme] = useState('false');

	const onThemeToggle = () => {
		setDarkTheme(!darkTheme);

		document
			.querySelector('body')
			.setAttribute('data-theme', darkTheme ? 'dark' : 'light');
	};

	return (
		<>
			<button onClick={onThemeToggle} style={{ display: 'none' }}>
				Toggle Theme
			</button>

			<Introduction data={introData} />
			<About data={aboutData} />
			<Experience data={experienceData} />
			<Education data={educationData} />
			<Skills data={skills} />
			<Projects data={projects} />

			<CommandMenu options={options} />
		</>
	);
};
