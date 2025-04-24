'use client'
import axios from 'axios'
import { useEffect, useRef, useState } from 'react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import ProductCard from '../components/card'
import RedBtn from '../components/redButton/btn'
import Title from '../components/title/title'
import './home.css'
import FlashSaleTimer from '../components/timer/timer'
import Arrival from '../components/arrival/page2'
import Delivery from '../components/arrival/page'
import HomeLayout from '../components/productLayout/layout'

export default function HomePage() {
	const [data, setData] = useState([])
	async function getData() {
		const response = await axios.get(
			'https://store-api.softclub.tj/Product/get-products'
		)
		setData(response.data.data.products)
	}
	useEffect(() => {
		getData()
	}, [])
	const swiperRef = useRef()
	return (
		<div>
			<div>
				<Title>Today’s</Title>
				<div className='flex items-end w-[96%] m-auto mt-5 gap-10'>
				<p className='text-4xl font-bold'>FlashSaleTimer</p>	
				<FlashSaleTimer />
				</div>
				<div className='w-[96%] m-auto  flex justify-end gap-5'>
					<div className='p-2 text-white flex justify-center items-center w-[40px] h-[40px] rounded-full bg-gray-400 '>
						<button onClick={() => swiperRef.current?.slidePrev()}>
							{'<'}
						</button>
					</div>
					<div className='p-2 text-white flex justify-center items-center w-[40px] h-[40px]  rounded-full bg-gray-400 '>
						<button onClick={() => swiperRef.current?.slideNext()}>
							{'>'}
						</button>
					</div>
				</div>
				<div className='w-[96%] m-auto '>
					<Swiper
						onBeforeInit={swiper => {
							swiperRef.current = swiper
						}}
						watchSlidesProgress={true}
						slidesPerView={4}
						spaceBetween={30}
						centeredSlides={true}
						autoplay={{
							delay: 2500,
							disableOnInteraction: false,
						}}
						modules={[Autoplay]}
					>
						{data.map(card => {
							return (
								<SwiperSlide key={card.id}>
									<ProductCard
										name={card.productName}
										image={card.image}
										price={card.price}
										originalPrice={card.discountPrice}
										discount={35}
										rating={4}
										reviewCount={card.quantity}
									/>
								</SwiperSlide>
							)
						})}
					</Swiper>
					<div className='flex justify-center items-center mb-5'>
						<RedBtn>View All Products</RedBtn>
					</div>
				</div>
				<Arrival/>
				<Delivery/>
				<HomeLayout />
						
			</div>
		</div>
	)
}
