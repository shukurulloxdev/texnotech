import { ChildProps } from '@/types'
import Sidebar from './_components/sidebar'

function Layout({ children }: ChildProps) {
	return (
		<div className='h-screen overflow-hidden'>
			<div className='grid h-full grid-cols-[300px_1fr]'>
				<Sidebar />

				<main className='relative overflow-y-auto bg-[#0f0f14]'>
					<div className='absolute size-full bg-pink-600/50 blur-[200px]' />
					<div className='min-h-full p-8'>{children}</div>
				</main>
			</div>
		</div>
	)
}

export default Layout
