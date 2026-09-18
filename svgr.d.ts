declare module '*.svg' {
	import { FC, SVGProps } from 'react'
	const content: FC<SVGProps<SVGElement>>
	export default content
}

declare module '*.svg?url' {
	// Turbopack отдаёт такой импорт строкой с URL, webpack — объектом StaticImageData.
	// Оба варианта принимает <Image src={...} />.
	import { StaticImageData } from 'next/image'
	const content: string | StaticImageData
	export default content
}
