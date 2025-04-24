import React from 'react'

export default function RedBtn({children}) {
  return (
	 <button type="submit" className='rounded-[8px] p-[10_20] bg-[#DB4444] text-white'>
		{children}
	 </button>
  )
}
