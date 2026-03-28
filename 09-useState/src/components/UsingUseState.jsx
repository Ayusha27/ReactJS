import {useState} from 'react'

const UsingUseState = () => {
const [count, setCount] = useState(0)

function handleOnIncrClick(){
    setCount(count + 1)
}

function handleOnDecrClick(){
    setCount(count - 1)
}

  return (
    <div>
     
      <div className='flex justify-between w-2/3'>
      <button className="p-2 h-fit w-fit rounded-xl bg-amber-400" onClick={handleOnIncrClick}>Increase</button>
       <h1>{count}</h1>  
      <button className="p-2 h-fit w-fit rounded-xl bg-amber-400" onClick={handleOnDecrClick}>Decrease</button>
      </div>
    </div>
  )
}

export default UsingUseState
