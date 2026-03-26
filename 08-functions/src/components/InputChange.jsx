import React from 'react'

function buttonChangeClicked(val)
{
    console.log(val)
}


const InputChange = () => {
    return (
    <div>
     <input 
     type='text' 
     placeholder='Enter the Text Here' 
     //create a function to get the value of the input field and print it in the console
     //this value is passed as an argument to the function buttonChangeClicked
     onChange={ (e) => {
       buttonChangeClicked(e.target.value);
     }}/>
    </div>
  )
}

export default InputChange
