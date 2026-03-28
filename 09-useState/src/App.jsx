import React from 'react'
import NormalFunctionChangeEx from './components/NormalFunctionChangeEx'
import UsingUseState from './components/UsingUseState'

const App = () => {
  return (
    <div className='px-2 py-2 flex flex-col justify-between gap-10'>
      <NormalFunctionChangeEx />
      <UsingUseState />
    </div>
  )
}

export default App
