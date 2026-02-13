import Link from 'next/link'
import React from 'react'

function Logo() {
	return (
		<Link
			href={'/'}
			className='flex select-none items-center justify-center text-[42px]'
		>
			<span className='font-bold italic tracking-tight text-pink-600'>
				Texnotech
			</span>
		</Link>
	)
}

export default Logo
// {/* <div className='flex flex-col gap-2'>
// 							{navItems.map(item => {
// 								const active = pathname === item.href
// 								const Icon = item.icon

// 								return (
// 									<Link
// 										key={item.href}
// 										href={item.href}
// 										className={cn(
// 											'group relative flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-300',
// 											active
// 												? 'bg-white/10 text-white shadow-[0_0_30px_rgba(255,255,255,0.05)]'
// 												: 'text-slate-400 hover:bg-white/5 hover:text-white'
// 										)}
// 									>
// 										{active && (
// 											<div className='absolute left-0 top-1/2 h-8 w-1 -translate-y-1/2 rounded-r-full bg-gradient-to-b from-pink-500 to-indigo-500' />
// 										)}

// 										<Icon
// 											size={18}
// 											className={cn(
// 												'transition-all duration-300',
// 												active ? 'text-pink-400' : 'group-hover:text-white'
// 											)}
// 										/>

// 										{item.title}
// 									</Link>
// 								)
// 							})}
// 						</div> */}