// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Diesel',
			social: {
				github: 'https://github.com/pradeepbgs/diesel',
			},
			sidebar: [
				{
					label: 'Getting-Started',
					items: [
						{
							label: 'Getting Started',
							slug: 'getting-started/getting-started',
						},
						{
							label: 'Router',
							slug: 'getting-started/router',
						},
						{
							label: 'Context',
							slug: 'getting-started/ctx',
						}
					],
				},
				// {
				// 	label: 'Guides',
				// 	items: [
				// 		// Each item here is one entry in the navigation menu.
				// 		{ label: 'Example Guide', slug: 'guides/example' },
				// 	],
				// },
				// {
				// 	label: 'Reference',
				// 	autogenerate: { directory: 'reference' },
				// },
			],
		}),
	],
});
