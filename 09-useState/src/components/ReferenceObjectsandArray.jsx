import React , {useState} from 'react'

const ReferenceObjectsandArray = () => {

    const [num, setNum] = useState({user: "Ayusha", age: 25})

    const handleOnClick = () => {
    //taking the reference of the num object and creating a new object with the same properties
    //hence objects and arrays are reference types in javascript    
    //destructuring the num object and creating a new object with the same properties
    const newNum = {...num} 
    newNum.user = "Ankit"
    setNum(newNum)
    }
  return (
    <div>
       <p>{num.user}, {num.age}</p> 
      <button 
      onClick={handleOnClick}
      className='px-4 py-2 bg-blue-500 text-white rounded-md'>
        Click me
      </button>
    </div>
  )
}

export default ReferenceObjectsandArray
