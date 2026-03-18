import React from 'react'

const Card = ({ image, offer, product, description }) => {
  return (
    <>
    <div className='Card'>
      <img src={image} alt="profile" className='profile'/>
      <div className='Offer-Container'>
      <h6 className='Offer'>{offer}</h6>
      </div>
      <h1 className="name">{product}</h1>
      <p>{description}</p>
      <div className='btn-container'>
        <button className='btn'>More</button>
        <button className='btn'>Buy</button>
      </div>
    </div>
    </>
  )
}

export default Card
