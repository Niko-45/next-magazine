export default function Title({children}) {
	return (
		<div className='flex w-[96%] m-auto items-center gap-[15px]'>
			<div className='w-[20px] h-[40px] bg-[#DB4444] rounded-[4px]'></div>
			<div><p className='text-[#DB4444]'>{children}</p></div>
		</div>
	)
}
