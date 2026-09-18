import DevLogo from '@/logo.svg'

const nav = [
	{ href: '#stack', label: 'Stack' },
	{ href: '#contact', label: 'Contact' },
]

export default function Header() {
	return (
		<header className='sticky top-0 z-50 border-b border-line/80 bg-ink/70 backdrop-blur-xl'>
			<div className='shell flex h-16 items-center justify-between gap-6'>
				<a
					href='#top'
					className='group flex items-center gap-3 transition-opacity duration-300 hover:opacity-70'
					aria-label='Rodion Zherdev — to the top'
				>
					{/* Логотип нарисован в фирменных синих. На почти-чёрном фоне
					    сводим его к белому силуэту: brightness(0) гасит все цвета,
					    invert поднимает результат в белый. */}
					<DevLogo className='h-7 w-auto brightness-0 invert' />
					<span className='hidden text-sm tracking-tight text-fg-dim transition-colors duration-300 group-hover:text-fg sm:block'>
						Rodion Zherdev
					</span>
				</a>

				<nav className='flex items-center gap-1'>
					{nav.map(({ href, label }) => (
						<a
							key={href}
							href={href}
							className='label px-3 py-2 transition-colors duration-300 hover:text-fg'
						>
							{label}
						</a>
					))}

					<a
						href='#contact'
						className='ml-2 inline-flex items-center gap-2 rounded-full border border-line-strong px-4 py-2 text-sm text-fg transition-[border-color,background-color] duration-300 hover:border-accent hover:bg-accent/10'
					>
						<span
							className='size-1.5 rounded-full bg-accent shadow-[0_0_0_3px_rgb(77_141_255/0.18)]'
							aria-hidden='true'
						/>
						Available
					</a>
				</nav>
			</div>
		</header>
	)
}
