import Image from 'next/image'
import Link from 'next/link'
import gucci from '../../../../public/images/products (1).png'
import dynam from '../../../../public/images/products (2).png'
import women from '../../../../public/images/products (3).png'
import ps5 from '../../../../public/images/products (4).png'
import Title from '../title/title'

export default function Arrival() {
	return (
		<>
			<Title>Featured</Title>
			<div className='w-full mx-auto px-4 sm:px-6 lg:px-8 py-8'>
				<div className='relative'>
					<h2 className='text-2xl font-bold text-gray-900 mb-6'>New Arrival</h2>

					<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
						<div className='relative bg-black rounded-lg overflow-hidden'>
							<div className='p-4 absolute bottom-1 md:p-6'>
								<h3 className='text-xl font-semibold text-white mb-2'>
									PlayStation 5
								</h3>
								<p className='text-gray-300 text-sm mb-4'>
									Experience the next generation of gaming with the PS5 console
									and DualSense controller.
								</p>
								<Link
									href=''
									className='inline-block text-white text-sm font-medium hover:underline'
								>
									Shop Now
								</Link>
							</div>
							<div className='flex justify-center'>
								<Image
									src={ps5}
									alt='PlayStation 5'
									width={400}
									height={200}
									className='object-contain'
								/>
							</div>
						</div>

						<div className='grid grid-cols-1 gap-4'>
							<div className='relative bg-black rounded-lg overflow-hidden'>
								<div className='absolute inset-0 flex items-center'>
									<Image
										src={women}
										alt="Women's Collections"
										width={400}
										height={200}
										className='object-cover w-full h-full'
									/>
								</div>
								<div className='relative  p-4 md:p-6 h-full flex flex-col justify-end'>
									<h3 className='text-xl font-semibold text-white mb-2'>
										Women{"'"}s Collections
									</h3>
									<p className='text-gray-300 text-sm mb-4'>
										Find your premium collections from finest brands at
										affordable prices.
									</p>
									<Link
										href=''
										className='inline-block text-white text-sm font-medium hover:underline'
									>
										Shop Now
									</Link>
								</div>
							</div>

							<div className='grid grid-cols-2 gap-4'>
								<div className='relative bg-black rounded-lg overflow-hidden'>
									<div className='p-4  absolute bottom-1'>
										<h3 className='text-lg font-semibold text-white mb-1'>
											Speakers
										</h3>
										<p className='text-gray-300 text-xs mb-2'>
											Premium sound quality for your home.
										</p>
										<Link
											href=''
											className='inline-block text-white text-xs font-medium hover:underline'
										>
											Shop Now
										</Link>
									</div>
									<div className='flex justify-center'>
										<Image
											src={dynam}
											alt='Speakers'
											width={100}
											height={100}
											className='object-contain'
										/>
									</div>
								</div>

								<div className='relative bg-black rounded-lg overflow-hidden'>
									<div className='p-4  absolute bottom-1'>
										<h3 className='text-lg font-semibold text-white mb-1'>
											Perfume
										</h3>
										<p className='text-gray-300 text-xs mb-2'>
											Luxury fragrances for every occasion.
										</p>
										<Link
											href=''
											className='inline-block text-white text-xs font-medium hover:underline'
										>
											Shop Now
										</Link>
									</div>
									<div className='flex justify-center'>
										<Image
											src={gucci}
											alt='Perfume'
											width={100}
											height={100}
											className='object-contain'
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
