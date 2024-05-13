import Header from '@/header/header'
import type { Metadata } from 'next'
import Head from 'next/head'

import { Montserrat } from 'next/font/google'
import './globals.css'

const inter = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Rodion Fronted Developer Landing',
	description: 'Developer landing page',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<Head>
				<meta name='theme-color' content='#2091F2'></meta>
			</Head>
			<body className={inter.className}>
				<Header />
				{children}
			</body>
		</html>
	)
}
