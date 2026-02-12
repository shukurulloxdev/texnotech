'use client'

import { useState } from 'react'
import { MessageCircle, Phone, Plus, Minus } from 'lucide-react'
import { faqs } from '@/components/constants'
import { cn } from '@/lib/utils'

export default function Questions() {
	const [openId, setOpenId] = useState<number | null>(1)

	const toggle = (id: number) => {
		setOpenId(prev => (prev === id ? null : id))
	}

	return (
		<section className='mt-4 bg-white py-8'>
			<div className='mx-auto max-w-7xl px-4'>
				<div className='mb-10'>
					<h1 className='mt-4 font-inter text-4xl font-semibold text-gray-800 '>
						Mijozlarimiz beradigan savollar
					</h1>
					<p className='mt-2 max-w-3xl font-inter text-muted-foreground'>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis
						maxime sunt doloremque quas rem nesciunt similique amet. Minus
						consequatur, quis fugit, enim officiis beatae sapiente,
					</p>
				</div>

				<div className='grid grid-cols-1 gap-12 lg:grid-cols-3'>
					{/* FAQ LIST */}
					<div className='space-y-5 lg:col-span-2'>
						{faqs.map(item => {
							const isOpen = openId === item.id

							return (
								<div
									key={item.id}
									className={`relative overflow-hidden rounded-3xl border transition-all duration-300
                  ${
										isOpen
											? 'border-pink-400/40 bg-gradient-to-br from-pink-50 to-white shadow-[0_5px_15px_rgba(236,72,153,0.25)]'
											: 'border-gray-200 bg-white hover:border-pink-300 hover:shadow-lg'
									}`}
								>
									{isOpen && (
										<div
											className='pointer-events-none absolute inset-0
                      bg-gradient-to-r
                      from-pink-500/10
                      via-transparent
                      to-fuchsia-500/10'
										/>
									)}

									<div
										onClick={() => toggle(item.id)}
										className={cn(
											'relative z-10 flex cursor-pointer items-center justify-between px-6 py-5',
											!isOpen &&
												'bg-gradient-to-r  from-pink-50 via-pink-50 to-pink-100 '
										)}
									>
										<h3 className='font-sora text-lg font-semibold text-gray-900 lg:text-xl'>
											{item.question}
										</h3>

										<div
											className={`flex size-10 items-center justify-center rounded-full transition
                      ${
												isOpen
													? 'bg-gradient-to-br from-pink-500 to-fuchsia-500 text-white shadow-lg'
													: 'bg-white text-pink-500'
											}`}
										>
											{isOpen ? <Minus size={18} /> : <Plus size={18} />}
										</div>
									</div>

									<div
										className={`grid transition-all duration-300 ease-in-out ${
											isOpen
												? 'grid-rows-[1fr] px-8 pb-6'
												: 'grid-rows-[0fr] px-8'
										}`}
									>
										<div className='overflow-hidden text-base leading-relaxed text-gray-600'>
											{item.answer}
										</div>
									</div>
								</div>
							)
						})}
					</div>
					{/*  */}
					<div className='space-y-8'>
						<div
							className='relative overflow-hidden rounded-3xl
              border border-pink-200
              bg-gradient-to-br from-white to-pink-50
              p-8 text-center shadow-xl'
						>
							<div
								className='absolute inset-0
                bg-gradient-to-br
                from-pink-500/5
                via-transparent
                to-fuchsia-500/5'
							/>

							<div className='relative z-10'>
								<div className='mb-6 flex justify-center'>
									<div className='flex size-14 items-center justify-center rounded-full bg-gradient-to-br from-pink-500 to-fuchsia-500 text-white shadow-lg'>
										<MessageCircle />
									</div>
								</div>

								<h3 className='mb-3 text-xl font-bold text-gray-900'>
									Qo‘shimcha savollar bormi?
								</h3>

								<p className='mb-6 text-sm text-gray-600'>
									Qo‘shimcha savollaringiz bo‘lsa, bizning mutaxassislar bilan
									har doim bepul va ochiq muloqot qilishingiz mumkin.
								</p>

								<button
									className='rounded-full
                  bg-gradient-to-r from-pink-500 to-fuchsia-500
                  px-8 py-3 text-sm font-semibold text-white
                  shadow-lg transition hover:opacity-90'
								>
									Bog‘lanish
								</button>
							</div>
						</div>

						<div
							className='flex items-center gap-4 rounded-3xl
              border border-pink-200
              bg-white p-6 shadow-md'
						>
							<div className='flex size-12 items-center justify-center rounded-full bg-pink-100 text-pink-500'>
								<Phone size={20} />
							</div>

							<div>
								<p className='text-xs text-gray-500'>
									Mutaxassis bilan bepul aloqa
								</p>
								<p className='text-lg font-bold text-gray-900'>08:00 | 22:00</p>
								<p className='text-sm text-gray-600'>+998 (90) 201-58-58</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
