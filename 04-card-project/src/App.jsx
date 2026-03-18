import React from 'react'
import Card from './components/Card'
import cardsData from './mock.json'

const App = () => {
  return (
    <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
      {cardsData.map((card) => (
        <Card 
          image={card.image}
          offer={card.offer}
          product={card.product}
          description={card.description}
        />
      ))}
    </div>
  )
}

export default App
