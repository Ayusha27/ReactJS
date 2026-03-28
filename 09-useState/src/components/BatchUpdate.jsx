import React from 'react'

const BatchUpdate = () => {
    const [num, setNum] = React.useState(10)
    
    const handleClick = () => {
       setNum(prev => (prev+1)) // setNum(num+1) 
       // // this will not work as expected because of the closure and batching of state updates in React. 
       // It will only update num by 1 instead of 5.
       setNum(prev => (prev+1)) 
       setNum(prev => (prev+1))
       setNum(prev => (prev+1))
       setNum(prev => (prev+1))
    }
  return (
    <div>
        <h1 className='text-2xl font-bold'>{num}</h1>

      <button className='bg-blue-500 text-white px-4 py-2 rounded' onClick={handleClick}>Hey Click Here</button>
    </div>
  )
}

export default BatchUpdate
