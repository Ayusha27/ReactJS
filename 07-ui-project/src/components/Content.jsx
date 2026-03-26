import React from 'react'
import Card from './Card'
import  CardData from '../mock.json'

const Content = () => {
  return (
    <div className='flex flex-row justify-between items-center gap-5'>
      <h1 className='text-3xl font-bold text-center'>Prospective Customer Segmentation</h1>
      {CardData.map((card) => (
        <Card 
          key={card.id}
          id={card.id}
          image={card.image}
          content={card.content}
          buttonLabel={card.buttonLabel}
        />
       ) )

      }
    </div>
  )
}

export default Content
