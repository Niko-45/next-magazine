'use client'

import Link from 'next/link'
import { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search'
import { Input } from '@mui/material'
import { Heart, Menu, ShoppingCart } from 'lucide-react'
import Image from 'next/image'
import logo from'../../../../public/images/Group 1116606595.png'
export default function Navbar() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

	return (
		<header className='shadow-xl'>
			<div className='container mx-auto px-4 py-3 flex items-center justify-between'>
				<div className='hidden md:flex'>
					<Image src={logo} alt='logo' />
				</div>
				<nav className='hidden md:flex items-center gap-6'>
					<Link href='/home' className='font-medium'>
						Home
					</Link>
					<Link href='/contact' className='font-medium'>
						Contact
					</Link>
					<Link href='/about' className='font-medium'>
						About
					</Link>
					<Link href='/login' className='font-medium'>
						Sign Up
					</Link>
				</nav>

				<div className='flex md:w-[30%] w-[95%] m-auto md:m-0 justify-between items-center gap-4'>
					<div className='md:hidden flex gap-2 items-center'>
						<button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
							<Menu />
						</button>
						<h1 className='uppercase font-bold'>Exclusive</h1>
					</div>
					<div className='relative  hidden md:flex items-center'>
						<Input
							type='search'
							placeholder='What are you looking for?'
							className='w-64 p-1 pr-8 bg-gray-100 rounded-[4px] border-none'
						/>
						<SearchIcon
							className='absolute right-2 w-4 h-4 text-gray-500'
							style={{ fontSize: '20px' }}
						/>
					</div>
					<div className='hidden md:flex'>
						<Heart />
					</div>
					<div className='relative flex'>
						<ShoppingCart className='' />
						<span className='absolute -top-3 -right-3 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center'>
							2
						</span>
					</div>
				</div>
			</div>
			{mobileMenuOpen && (
				<div className='md:hidden px-4 py-2 border-t'>
					<nav className='flex flex-col gap-2'>
						<Link href='/' className='py-2'>
							Home
						</Link>
						<Link href='/contact' className='py-2'>
							Contact
						</Link>
						<Link href='/about' className='py-2'>
							About
						</Link>
						<Link href='/signup' className='py-2'>
							Sign Up
						</Link>
					</nav>
					<div className='relative mt-3'>
						<Input
							type='text'
							placeholder='What are you looking for?'
							className='w-full pr-8 bg-gray-100 border-none'
						/>
						<SearchIcon
							className='absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500'
							style={{ fontSize: '20px' }}
						/>
					</div>
				</div>
			)}
		</header>
	)
}
