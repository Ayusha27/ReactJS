import React from 'react'

const Navbar = () => {
  return (
    <div className='px-2 flex justify-between'>
      <button className='h-fit bg-black text-white text-[10px] px-1.5 py-0.5 rounded-2xl'>TARGET AUDIENCE</button>
      <div className='flex justify-between gap-2 py-0.5 px-1.5'>
      <img src="src/assets/bank.png" alt="logo" className='h-3 w-3'/>  
      <h1 className='text-black font-extrabold text-[10px]'>DIGITAL BANKING PLATFORM</h1>
      </div>
    </div>
  )
}

export default Navbar
