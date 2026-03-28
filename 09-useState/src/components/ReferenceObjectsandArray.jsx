import React , {useState} from 'react'

const ReferenceObjectsandArray = () => {

    const [num, setNum] = useState({user: "Ayusha", age: 25})

    const handleOnClick = () => {
    //taking the reference of the num object and creating a new object with the same properties
    //hence objects and arrays are reference types in javascript    
    //destructuring the num object and creating a new object with the same properties


    // in memory, the num object is stored in a location and when we take the reference of it, 
    // we are taking the address of that location. Hence when we change the value of the user
    // property in the newNum object, it also changes the value of the user property in the num 
    // object because they both are pointing to the same location in memory. This is called shallow copy.

    //deep copy is when we create a new object with the same properties and values as the original object 
    // but they are stored in different locations in memory. Hence when we change the value of the user 
    // property in the newNum object, it doesn't change the value of the user property in the num 
    // object because they are stored in different locations in memory. This is called deep copy.
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
