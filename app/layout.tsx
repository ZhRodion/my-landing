import type { Metadata, Viewport } from 'next'
import {
	Bricolage_Grotesque,
	Instrument_Sans,
	JetBrains_Mono,
} from 'next/font/google'

import Footer from '@/footer/footer'
import Header from '@/header/header'
import './globals.css'

// Дисплейный гротеск с характером — только на крупные заголовки
const bricolage = Bricolage_Grotesque({
	subsets: ['latin'],
	variable: '--font-bricolage',
	display: 'swap',
})

// Текстовый — спокойный, хорошо читается в мелком кегле
const instrument = Instrument_Sans({
	subsets: ['latin'],
	variable: '--font-instrument',
	display: 'swap',
})

// Моно — подписи, индексы, служебные строки
const jetbrains = JetBrains_Mono({
	subsets: ['latin'],
	variable: '--font-jetbrains',
	display: 'swap',
})

export const metadata: Metadata = {
	title: 'Rodion Zherdev — Frontend Developer',
	description:
		'Frontend developer with 4+ years of commercial experience. Complex interfaces, web performance, React and Next.js.',
}

export const viewport: Viewport = {
	themeColor: '#08080a',
	colorScheme: 'dark',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html
			lang='en'
			className={`${bricolage.variable} ${instrument.variable} ${jetbrains.variable}`}
		>
			<body className='relative'>
				<div className='relative z-10 flex min-h-screen flex-col'>
					<Header />
					{children}
					<Footer />
				</div>
			</body>
		</html>
	)
}
