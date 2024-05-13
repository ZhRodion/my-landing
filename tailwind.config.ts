import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			colors: {
				blue: '#2091F2',
				blueBorder: '#4cacff',
				darkBlue: '#10316B',
			},
			boxShadow: {
				buttonShadow: '0 4px 20px 0 rgba(0, 0, 0, 0.4)',
			},
			fontSize: {
				14: '14px',
				18: '18px',
				20: '20px',
				24: '24px',
				36: '36px',
				40: '40px',
				60: '60px',
			},
			lineHeight: {
				relaxed: '1.8',
			},
		},
		screens: {
			s: '320px',
			sm: '640px',
			md: '768px',
			lg: '1023px',
			xl: '1280px',
			xxl: '1350px',
		},
	},
	plugins: [],
}
export default config
