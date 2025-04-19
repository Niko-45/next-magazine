'use client'
import axios from 'axios'
import { useEffect, useState } from 'react'
import ProductCard from './components/card'

export default function HomePage() {
	const [data, setData] = useState([])
	async function getData() {
		const { data } = await axios.get(
			'https://store-api.softclub.tj/Cart/get-products-from-cart'
		)
		setData(data)
	}
	useEffect(() => {
		getData()
	}, [])
  console.log(data);
  
	return (
		<div>
  
			<ProductCard
				name='AK-900 Wired Keyboard'
				image='/placeholder.svg?height=200&width=200'
				price={960}
				originalPrice={1160}
				discount={35}
				rating={4}
				reviewCount={75}
			/>
    
		</div>
	)
}
