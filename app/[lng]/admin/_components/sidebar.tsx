'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
	LayoutDashboard,
	Settings,
	LogOut,
	Folders,
	Handbag,
	LayersPlus,
	User,
	MoveRightIcon,
	UserStar,
} from 'lucide-react'
import Logo from '@/components/shared/logo'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

const navItems = [
	{
		title: 'Statistika',
		href: '/admin',
		icon: LayoutDashboard,
	},
	{
		title: 'Buyurtmalar',
		href: '/admin/orders',
		icon: Handbag,
	},
	{
		title: 'Texnikalar',
		href: '/admin/products',
		icon: Folders,
	},
	{
		title: 'Texnikalar kiritish',
		href: '/admin/add-product',
		icon: LayersPlus,
	},
]

const systemItems = [
	{
		title: 'Settings',
		href: '/admin/settings',
		icon: Settings,
	},
]

function Sidebar() {
	const pathname = usePathname()
	console.log(pathname)
	return (
		<aside className='flex h-screen w-[300px] flex-col border-r bg-gray-100'>
			<div className='flex h-20 items-center border-b px-6'>
				<Logo />
			</div>

			<nav className='flex-1 space-y-6 px-4 py-6'>
				<div className='space-y-3'>
					<p className='px-3 text-xs uppercase tracking-wider text-slate-500'>
						Asosiy
					</p>
					<div className='flex flex-col gap-2'>
						{navItems.map(item => {
							return (
								<Link
									key={item.href}
									href={item.href}
									className={cn(
										'flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-200 hover:bg-gray-200',
										pathname.slice(3) === item.href &&
											'bg-pink-200 hover:bg-pink-200'
									)}
								>
									<item.icon size={18} />
									{item.title}
								</Link>
							)
						})}
					</div>
				</div>

				<div className='space-y-1'>
					<p className='px-3 text-xs uppercase tracking-wider text-slate-500'>
						System
					</p>

					{systemItems.map(item => {
						const Icon = item.icon
						const active = pathname === item.href

						return (
							<Link
								key={item.href}
								href={item.href}
								className={cn(
									'flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-200',
									active
										? 'bg-slate-800 text-white shadow-inner'
										: 'hover:bg-slate-800/60 hover:text-white'
								)}
							>
								<Icon size={18} />
								{item.title}
							</Link>
						)
					})}
				</div>
			</nav>

			<div className='border-t border-slate-200 '>
				<div
					className='flex flex-col gap-3 
      bg-gradient-to-br from-white via-rose-50 to-pink-100
      p-6 shadow-md ring-1 ring-slate-200'
				>
					{/* User Info */}
					<div className='flex items-center gap-3'>
						<div
							className='flex size-12 items-center justify-center 
          rounded-full bg-white shadow-sm ring-1 ring-slate-200'
						>
							<UserStar size={22} className='text-pink-600' />
						</div>

						<div className='flex flex-col leading-tight'>
							<span className='text-[17px] font-semibold text-slate-800'>
								Shukurulloh
							</span>
							<span className='text-[13px] text-slate-500'>
								+998 (90) 201-58-58
							</span>
						</div>
					</div>

					{/* Logout Button */}
					<Button
						className='h-9 gap-2 rounded-xl 
        bg-pink-500 text-sm font-medium
        shadow-sm transition-all duration-200
        hover:bg-pink-700 hover:shadow-md'
					>
						<span>Chiqish</span>
						<LogOut size={16} />
					</Button>
				</div>
			</div>
		</aside>
	)
}

export default Sidebar
