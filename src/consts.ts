export const SITE = {
	title: 'Documentation',
	description: 'Your website description.',
	defaultLanguage: 'en-us',
} as const;

export const OPEN_GRAPH = {
	image: {
		src: 'https://github.com/withastro/astro/blob/main/assets/social/banner-minimal.png?raw=true',
		alt:
			'astro logo on a starry expanse of space,' +
			' with a purple saturn-like planet floating in the right foreground',
	},
	twitter: 'astrodotbuild',
};

export const KNOWN_LANGUAGES = {
	English: 'en',
} as const;
export const KNOWN_LANGUAGE_CODES = Object.values(KNOWN_LANGUAGES);

export const GITHUB_EDIT_URL = `https://github.com/withastro/astro/tree/main/examples/docs`;

export const COMMUNITY_INVITE_URL = `https://astro.build/chat`;

// See "Algolia" section of the README for more information.
export const ALGOLIA = {
	indexName: 'XXXXXXXXXX',
	appId: 'XXXXXXXXXX',
	apiKey: 'XXXXXXXXXX',
};

export type Sidebar = Record<
	(typeof KNOWN_LANGUAGE_CODES)[number],
	Record<string, { text: string; link: string }[]>
>;
export const SIDEBAR: Sidebar = {
	en: {
		'Git': [
			{ text: 'Git常用命令', link: 'git/git常用命令' },
			{ text: 'Git安装教程', link: 'git/git常用命令' },
			{ text: 'Git常见错误及解决方法', link: 'git/git常用命令' },
			{ text: 'Git', link: 'demo/demo' },
			{ text: 'Git', link: 'demo/demo' },
		],
		'linux': [{ text: 'linux常用命令', link: 'demo/demo' }],
		'ubuntu': [
			{ text: 'ubuntu镜像站', link: 'demo/demo' },
			{ text: 'ubuntu版本发行', link: 'demo/demo' },
			{ text: '笨笨兔的故事', link: 'demo/demo' },
		],
		'Android': [
			{ text: 'Android应用', link: 'demo/demo' },
			{ text: 'AndroidSDK', link: 'demo/demo' },
			{ text: 'Android框架', link: 'demo/demo' },
			{ text: 'Android驱动', link: 'demo/demo' },
			{ text: 'Android内核', link: 'demo/demo' },
		],
		'MCU': [
			{ text: 'STM32F103C8T6', link: 'demo/demo' },
			{ text: 'STM32F103C8T6', link: 'demo/demo' },
			{ text: 'STM32F103C8T6', link: 'demo/demo' },
			{ text: 'STM32F103C8T6', link: 'demo/demo' },
			{ text: 'STM32F103C8T6', link: 'demo/demo' },
		],
		'IOT': [{ text: '物联网导论', link: 'demo/demo' }],
	},
};
