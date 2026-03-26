import React from 'react'
import Navbar from './components/Navbar'
import Content from './components/Content'

const App = () => {
  return (
    <div className='px-2 py-2 flex flex-col justify-between gap-10'>
      <Navbar />
      <Content />
    </div>
  )
}

export default App
