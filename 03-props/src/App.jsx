import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className="card-container">
      <Card user="Ayusha Nayak" age={25} image={"https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400"}/>
      <Card user="Ankit Mohanty" age={25} image={"https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400"}/>
      <Card user="Tanuj Mohanty" age={25} image={"https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400"}/>
    </div>
  )
}

export default App
