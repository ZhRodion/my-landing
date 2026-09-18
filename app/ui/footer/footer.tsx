export default function Footer() {
	return (
		<footer className='mt-auto border-t border-line'>
			<div className='shell flex flex-col gap-4 py-8 sm:flex-row sm:items-center sm:justify-between'>
				{/* Без года: страница пререндерится статически, и new Date()
				    застыл бы на годе сборки до следующего деплоя. */}
				<p className='label'>
					&copy; Rodion Zherdev &nbsp;—&nbsp; Frontend developer
				</p>

				<div className='flex items-center gap-6'>
					<p className='label'>Next.js &nbsp;·&nbsp; TypeScript</p>
					<a
						href='#top'
						className='label transition-colors duration-300 hover:text-fg'
					>
						Back to top &nbsp;&uarr;
					</a>
				</div>
			</div>
		</footer>
	)
}
