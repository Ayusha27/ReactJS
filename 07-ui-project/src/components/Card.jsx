import React from 'react'

const Card = ({id, content, image, buttonLabel}) => {
  return (
    <div className='relative h-80 w-60 rounded-lg bg-black overflow-hidden'>
      <img 
        src={image} 
        alt="profile" 
        className='h-full w-full object-cover'
      />

      <div className='absolute top-3 left-3 h-7 w-7 rounded-full bg-white flex justify-center items-center shadow-lg'>
        <span className='text-xs font-bold text-black'>{id}</span>
        <h5 className='absolute top-10 left-3 text-black'>{content}</h5>
      </div>
      <button className='absolute bottom-3 left-3 h-fit w-fit p-2 rounded-full bg-white text-xs font-bold text-black shadow-lg'>{buttonLabel}</button>

    </div>
  )
}

export default Card