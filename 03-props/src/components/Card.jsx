import React from 'react'

const Card = (props) => {
  return (
    <div className='card'>
     <img src={props.image}alt="profile" className='profile'/>
     <h1 className="name">{props.user}</h1>
     <h2 className="age">{props.age}</h2>
    </div>
  )
}

export default Card
