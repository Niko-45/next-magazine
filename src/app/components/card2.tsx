"use client"
import { useState } from "react"
import {
	Smartphone,
	Monitor,
	Watch,
	Camera,
	Gamepad,
	Headphones,
} from "lucide-react"

export default function Card2() {
	const [activeCategory, setActiveCategory] = useState<string | null>(null)

	const categories = [
		{ name: "Smartphones", icon: Smartphone },
		{ name: "Monitors", icon: Monitor },
		{ name: "Watches", icon: Watch },
		{ name: "Cameras", icon: Camera },
		{ name: "Gaming", icon: Gamepad },
		{ name: "Audio", icon: Headphones },
	]

	return (
		<div>
			<section className='py-12 w-[85%] mx-auto'>
				<div className='flex justify-between items-center mb-10'>
					<h2 className='text-3xl font-bold'>Browse By Category</h2>
					<div className='flex gap-4'>
						<button className='w-10 h-10 border rounded-full flex items-center justify-center hover:bg-gray-100'>
							<svg width='24' height='24' fill='none' stroke='black'>
								<path
									d='M15 19L8 12L15 5'
									strokeWidth='2'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
							</svg>
						</button>
						<button className='w-10 h-10 border rounded-full flex items-center justify-center hover:bg-gray-100'>
							<svg width='24' height='24' fill='none' stroke='black'>
								<path
									d='M9 5L16 12L9 19'
									strokeWidth='2'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
							</svg>
						</button>
					</div>
				</div>

				<div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4'>
					{categories.map(({ name, icon: Icon }) => {
						const isActive = activeCategory === name

						return (
							<div
								key={name}
								className={`w-[85%] border rounded-md p-6 flex flex-col items-center justify-center h-40 transition-colors cursor-pointer ${
									isActive
										? 'bg-red-500 text-white'
										: 'bg-white text-black hover:bg-red-500 hover:text-white'
								}`}
								onClick={() => setActiveCategory(name)}
							>
								<Icon
									className={`w-10 h-10 mb-4 ${
										isActive ? 'text-white' : 'text-black'
									}`}
								/>
								<span className='font-medium text-center'>{name}</span>
							</div>
						)
					})}
				</div>
				<div className='border-b border-gray-200 mt-12' />
			</section>
		</div>
	)
}
