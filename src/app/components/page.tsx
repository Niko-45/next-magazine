'use client'
import axios from 'axios'
import { useEffect, useState } from 'react'

export default function GetCard() {
	const [data, setData] = useState([])
	async function get(){
		try {
			const { data } = await axios.get('https://store-api.softclub.tj/Cart/get-products-from-cart', {
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`
  }
}
			)
			console.log(data.data.products)
			setData(data.data.products)
		} catch (error) {
			console.log(error)
		}
	}
	useEffect(()=>{
		get();
	},[])
	return (
		<>
			
		</>
	)
}

