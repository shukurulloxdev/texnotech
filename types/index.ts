import { bestSeller } from './../components/constants/index'
import { LucideIcon } from 'lucide-react'
import { ReactNode } from 'react'

export interface ChildProps {
	children: ReactNode
}
export interface StatisticsTip {
	title: string
	value: string
	suffix: string
	icon: LucideIcon
}
export interface bestSellerTip {
	brend: string
	category: string
	price: number
	soldout: string
	title: string
	image: string
}
