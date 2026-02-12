import { ChildProps } from '@/types'
import Sidebar from './_components/sidebar'

function Layout({ children }: ChildProps) {
	return (
		<div className='h-screen overflow-hidden'>
			<div className='grid h-full grid-cols-[300px_1fr]'>
				<Sidebar />

				<main className='overflow-y-auto'>
					<div className='min-h-full p-8 '>{children}</div>
				</main>
			</div>
		</div>
	)
}

export default Layout
