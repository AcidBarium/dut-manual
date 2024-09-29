// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: '大工生存手册',
			defaultLocale: 'zh-cn',
			social: {
				github: 'https://github.com/NAOSI-DLUT/guide.naosi.org',
			},
			sidebar: [
				{ label: '引言', slug: 'intro' },
				{
					label: '选课',
					autogenerate: { directory: 'courses' },
				},
			],
		}),
	],
});
