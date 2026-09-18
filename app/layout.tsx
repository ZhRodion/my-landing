import Header from '@/header/header'
import type { Metadata, Viewport } from 'next'

import { Montserrat } from 'next/font/google'
import './globals.css'

const inter = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Rodion Frontend Developer Landing',
	description: 'Rodion ReactJS Developer landing page',
}

export const viewport: Viewport = {
	themeColor: '#2091F2',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<Header />
				{children}
			</body>
		</html>
	)
}
