import DevLogo from '@/logo.svg'
import ContactModal from '@/modal/modal'

export default function Header() {
	return (
		<header className='header w-full border-b border-b-blueBorder py-1'>
			<div className='container-wrapper flex justify-between items-center'>
				<DevLogo />
				<ContactModal />
			</div>
		</header>
	)
}
