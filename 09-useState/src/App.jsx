import React from 'react'
import NormalFunctionChangeEx from './components/NormalFunctionChangeEx'
import UsingUseState from './components/UsingUseState'
import ReferenceObjectsandArray from './components/ReferenceObjectsandArray'

const App = () => {
  return (
    <div className='px-2 py-2 flex flex-col justify-between gap-10'>
      <NormalFunctionChangeEx />
      <UsingUseState />
      <ReferenceObjectsandArray />
    </div>
  )
}

export default App
