type Technology = {
	name: string
	role: string
}

const technologies: Technology[] = [
	{ name: 'React', role: 'UI library' },
	{ name: 'Next.js', role: 'Framework' },
	{ name: 'Redux Toolkit', role: 'State' },
	{ name: 'Zustand', role: 'State' },
	{ name: 'Tailwind CSS', role: 'Styling' },
	{ name: 'SCSS', role: 'Styling' },
	{ name: 'Vite', role: 'Bundler' },
	{ name: 'Webpack', role: 'Bundler' },
	{ name: 'Git', role: 'Version control' },
]

export default function Stack() {
	return (
		<section id='stack' className='relative border-b border-line'>
			<div className='shell py-20 md:py-28'>
				<div className='reveal-scroll flex flex-wrap items-baseline justify-between gap-4'>
					<p className='label'>Stack</p>
					<p className='max-w-[38ch] text-sm text-fg-faint'>
						Tools I reach for daily, in production.
					</p>
				</div>

				<h2 className='reveal-scroll mt-6 max-w-[20ch] font-display text-[clamp(2rem,5vw,3.5rem)] leading-[0.95] tracking-[-0.04em] text-fg'>
					Technology stack
				</h2>

				{/* Волосяная сетка: рамки сверху и слева у контейнера,
				    справа и снизу у ячеек — так линии не удваиваются. */}
				<ul className='reveal-scroll mt-14 grid grid-cols-2 border-t border-l border-line sm:grid-cols-3'>
					{technologies.map(({ name, role }, index) => (
						<li
							key={name}
							// Девятая ячейка на двухколоночном мобильном добирает ряд,
							// чтобы сетка не обрывалась на половине. На sm уже не нужно.
							className='group relative border-r border-b border-line last:col-span-2 sm:last:col-span-1'
						>
							<div className='flex h-full flex-col justify-between gap-10 p-5 transition-colors duration-500 group-hover:bg-ink-elev md:p-6'>
								<span className='label transition-colors duration-500 group-hover:text-accent'>
									{String(index + 1).padStart(2, '0')}
								</span>

								<div>
									<p className='font-display text-xl leading-none tracking-[-0.02em] text-fg md:text-2xl'>
										{name}
									</p>
									<p className='label mt-3'>{role}</p>
								</div>
							</div>

							{/* Акцентная подсветка нижней грани на ховере */}
							<span
								className='pointer-events-none absolute inset-x-0 -bottom-px h-px origin-left scale-x-0 bg-accent transition-transform duration-500 ease-out-soft group-hover:scale-x-100'
								aria-hidden='true'
							/>
						</li>
					))}
				</ul>
			</div>
		</section>
	)
}
