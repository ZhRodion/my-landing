import Image from 'next/image'

const lead =
	'I am a Frontend Developer with over 4 years of commercial development experience. My expertise includes developing intricate user interfaces, enhancing web application performance, and implementing innovative functional capabilities.'

const support =
	'Exploring the intersection of design and code, I thrive on crafting immersive digital experiences that seamlessly blend creativity with functionality.'

const facts = [
	{ key: 'Experience', value: '4+ years' },
	{ key: 'Focus', value: 'Interfaces, performance' },
	{ key: 'Core', value: 'React, Next.js, TypeScript' },
]

export default function Hero() {
	return (
		<section id='top' className='relative border-b border-line'>
			<div className='shell pt-16 pb-20 md:pt-28 md:pb-28'>
				<h1 className='visually-hidden'>
					Rodion Zherdev — Frontend Developer
				</h1>

				<div className='grid items-start gap-x-10 gap-y-12 md:grid-cols-12'>
					{/* Левая колонка: имя и текст */}
					<div className='md:col-span-7'>
						<p className='label reveal'>Frontend developer</p>

						<p
							className='reveal mt-7 font-display text-[clamp(3.25rem,10vw,7.5rem)] leading-[0.86] tracking-[-0.045em] text-fg [--reveal-delay:80ms]'
							aria-hidden='true'
						>
							Rodion
							<br />
							Zherdev
						</p>

						<div className='reveal mt-10 h-px w-full bg-line [--reveal-delay:160ms]' />

						<div className='reveal [--reveal-delay:220ms]'>
							<p className='mt-8 max-w-[52ch] text-lg leading-[1.65] text-fg-dim md:text-xl'>
								{lead}
							</p>
							<p className='mt-5 max-w-[52ch] text-base leading-[1.7] text-fg-faint'>
								{support}
							</p>
						</div>
					</div>

					{/* Правая колонка: фото и справка */}
					<div className='md:col-span-5 md:pt-2'>
						<figure className='group reveal relative [--reveal-delay:120ms]'>
							<div className='relative aspect-4/5 w-full overflow-hidden border border-line bg-ink-elev'>
								<Image
									className='object-cover grayscale contrast-105 transition-[filter,transform] duration-700 ease-out-soft group-hover:scale-[1.02] group-hover:grayscale-0'
									src='/images/hero/rodion.jpg'
									alt='Portrait of Rodion Zherdev'
									fill
									priority
									sizes='(min-width: 768px) 40vw, 100vw'
								/>
								{/* Затемнение снизу, чтобы фото не спорило с текстом */}
								<div
									className='pointer-events-none absolute inset-0 bg-linear-to-t from-ink/55 via-transparent to-transparent'
									aria-hidden='true'
								/>
							</div>

							<figcaption className='label mt-4 flex items-center justify-between'>
								<span>Rodion Zherdev</span>
								<span className='text-fg-faint'>Remote</span>
							</figcaption>
						</figure>

						<dl className='reveal mt-10 border-t border-line [--reveal-delay:280ms]'>
							{facts.map(({ key, value }) => (
								<div
									key={key}
									className='flex items-baseline justify-between gap-4 border-b border-line py-3.5'
								>
									<dt className='label'>{key}</dt>
									<dd className='text-right text-sm text-fg-dim'>{value}</dd>
								</div>
							))}
						</dl>
					</div>
				</div>
			</div>
		</section>
	)
}
