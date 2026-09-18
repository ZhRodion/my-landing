/** @type {import('next').NextConfig} */
const nextConfig = {
	// Основной режим Next 16. Два варианта импорта SVG:
	//   import Icon from './i.svg'      → React-компонент через SVGR
	//   import url  from './i.svg?url'  → URL файла, годится для <Image src={url} />
	turbopack: {
		rules: {
			'*.svg': [
				{
					condition: { query: '?url' },
					type: 'asset',
				},
				{
					condition: { not: { query: '?url' } },
					loaders: ['@svgr/webpack'],
					as: '*.js',
				},
			],
		},
	},

	// То же самое для запасного режима `next build --webpack`.
	webpack(config) {
		const fileLoaderRule = config.module.rules.find(rule =>
			rule.test?.test?.('.svg'),
		)

		config.module.rules.push(
			// Штатное правило Next, но только для импортов с ?url
			{
				...fileLoaderRule,
				test: /\.svg$/i,
				resourceQuery: /url/,
			},
			// Все остальные .svg — в React-компоненты
			{
				test: /\.svg$/i,
				issuer: fileLoaderRule.issuer,
				resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] },
				use: ['@svgr/webpack'],
			},
		)

		fileLoaderRule.exclude = /\.svg$/i

		return config
	},
}

export default nextConfig
