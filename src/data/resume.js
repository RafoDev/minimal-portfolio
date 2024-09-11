import githubLogo from '../assets/logos/github.svg';
import gmailLogo from '../assets/logos/gmail.svg';
import linkedinLogo from '../assets/logos/linkedin.svg';

// Put your data here ;)

const data = {
	name: 'Rafael David',
	location: 'Arequipa, Perú 🇵🇪',
	introduction: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
	avatarUrl: 'https://avatars.githubusercontent.com/u/80899413?v=4',
	social: [
		{
			name: 'Github',
			logo: githubLogo,
			url: 'https://github.com/RafoDev',
		},
		{
			name: 'LinkedIn',
			logo: linkedinLogo,
			url: 'https://github.com/RafoDev',
		},
		{
			name: 'Gmail',
			logo: gmailLogo,
			url: 'https://github.com/RafoDev',
		},
	],
	about:
		'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates officiis corporis alias minus rem, libero reprehenderit deleniti in molestiae veritatis.',
	experience: [
		{
			name: 'lorem',
			remote: true,
			roles: ['Software Developer', 'Project Manager'],
			description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates officiis corporis alias minus rem',
			startYear: 2024,
			endYear: 2024,			
		},
		{
			name: 'lorem',
			remote: false,
			roles: ['Software Developer', 'Project Manager'],
			description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates officiis corporis alias minus rem',
			startYear: 2024,
			endYear: 2024,			
		}
	],
	education : [
		{
			name: 'lorem',
			description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates officiis corporis alias minus rem',
			startYear: 2024,
			endYear: 2024,
			expected: true	
		}
	],
	skills : [
		'Javascript',
		'ReactJS'
	],
	projects : [
		{
			name: 'Lorem',
			description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates officiis corporis alias minus rem',
			stack: [
				'ts',
				'graphql',
				'mongoDB'
			]
		},
		{
			name: 'Lorem',
			description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates officiis corporis alias minus rem',
			stack: [
				'ts',
				'graphql',
				'mongoDB'
			]
		},
		{
			name: 'Lorem',
			description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates officiis corporis alias minus rem',
			stack: [
				'ts',
				'graphql',
				'mongoDB'
			]
		},
		{
			name: 'Lorem',
			description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates officiis corporis alias minus rem',
			stack: [
				'ts',
				'graphql',
				'mongoDB'
			]
		},
		{
			name: 'Lorem',
			description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates officiis corporis alias minus rem',
			stack: [
				'ts',
				'graphql',
				'mongoDB'
			]
		},
		{
			name: 'Lorem',
			description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates officiis corporis alias minus rem',
			stack: [
				'ts',
				'graphql',
				'mongoDB'
			]
		}
	]

};

const options = {
	actions: [
		{
			name: 'Print',
			action: () => {
				window.print();
			},
		},
	],
	links: data.social,
};

const introData = {
	name: data.name,
	location: data.location,
	introduction: data.introduction,
	avatarUrl: data.avatarUrl,
	social: data.social,
};

const aboutData = {
	about: data.about,
};

const experienceData = {
	experience: data.experience
}

const educationData = {
	education: data.education
}

const skills = {
	skills: data.skills
}

const projects = {
	projects : data.projects
}

export { 
	data, 
	options, 
	introData, 
	aboutData,
	experienceData,
	educationData,
	skills,
	projects
};
