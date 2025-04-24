import Image from 'next/image'
import delivery from "../../../../public/images/icon-delivery.png"
import customer from "../../../../public/images/Icon-Customer service.png"

export default function Delivery() {
	return (
		 <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-10 ">
			  <div className="flex flex-col items-center text-center">
					<div className="w-16 h-16 bg-[#000000] rounded-full flex items-center justify-center mb-4">
						 <Image src={delivery} alt='delivery'/>
					</div>
					<h3 className="text-xl font-bold mb-2">FREE AND FAST DELIVERY</h3>
					<p className="text-gray-600">Free delivery for all orders over $140</p>
			  </div>

			  <div className="flex flex-col items-center text-center">
					<div className="w-16 h-16 bg-[#000000] rounded-full flex items-center justify-center mb-4">
					<Image src={customer} alt='delivery'/>
						 
					</div>
					<h3 className="text-xl font-bold mb-2">24/7 CUSTOMER SERVICE</h3>
					<p className="text-gray-600">Friendly 24/7 customer support</p>
			  </div>

			  <div className="flex flex-col items-center text-center">
					<div className="w-16 h-16 bg-[#000000] rounded-full flex items-center justify-center mb-4">
					<svg
							  xmlns="http://www.w3.org/2000/svg"
							  width="24"
							  height="24"
							  viewBox="0 0 24 24"
							  fill="none"
							  stroke="currentColor"
							  strokeWidth="2"
							  strokeLinecap="round"
							  strokeLinejoin="round"
							  className="text-white"
						 >
							  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
						 </svg>
					</div>
					<h3 className="text-xl font-bold mb-2">MONEY BACK GUARANTEE</h3>
					<p className="text-gray-600">We reurn money within 30 days</p>
			  </div>
		 </div>
	)
}
