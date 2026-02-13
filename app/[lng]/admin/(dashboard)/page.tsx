import { Separator } from '@/components/ui/separator'
import { TrendingUp, ShoppingCart, MessageCircle, Wallet } from 'lucide-react'
import React from 'react'

function Page() {
	return (
		<div className=' overflow-hidden'>
			<div className='space-y-10'>
				<div>
					<h1 className='text-4xl font-bold tracking-tight text-white'>
						Sayt statistikasi
					</h1>
					<p className='mt-2 text-sm text-slate-400'>
						Saytning real-vaqt nazorati paneli
					</p>
				</div>

				<div className='grid  grid-cols-4 gap-5'>
					{[
						{
							title: 'Jami texnika',
							value: '100',
							suffix: 'ta',
							icon: <TrendingUp size={22} />,
							glow: 'from-cyan-500 to-blue-500',
						},
						{
							title: 'Jami sotuv',
							value: '19',
							suffix: 'ta',
							icon: <ShoppingCart size={22} />,
							glow: 'from-pink-500 to-rose-500',
						},
						{
							title: 'Jami izoh',
							value: '10',
							suffix: 'ta',
							icon: <MessageCircle size={22} />,
							glow: 'from-indigo-500 to-purple-500',
						},
						{
							title: 'Jami summa',
							value: '27,731,000',
							suffix: "so'm",
							icon: <Wallet size={22} />,
							glow: 'from-emerald-500 to-teal-500',
						},
					].map((card, i) => (
						<div
							key={i}
							className='group  cursor-pointer overflow-hidden rounded-3xl
							border border-white/20
							bg-white/10
							p-6
							backdrop-blur-2xl
							transition-all duration-500
							hover:-translate-y-2 hover:border-white/20'
						>
							<div className=' space-y-5'>
								<div className='flex items-center justify-between'>
									<span className='text-xl font-medium tracking-wide text-slate-300 group-hover:text-white'>
										{card.title}
									</span>

									<div className='rounded-xl bg-white/20 p-2 text-white'>
										{card.icon}
									</div>
								</div>

								<Separator className='opacity-10' />

								<h2 className='text-4xl font-bold tracking-tight text-white'>
									{card.value}{' '}
									<span className='text-lg font-medium text-slate-400'>
										{card.suffix}
									</span>
								</h2>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default Page
