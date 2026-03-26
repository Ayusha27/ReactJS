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

//instead of onChange we can also use onInput event to get the value of the input field and print it in the console
//onInput={ (e) => {
//  buttonChangeClicked(e.target.value);
//}}

//other events that we can use to get the value of the input field and print it in the console
//onWheel for Scroll event
//onMouseMove for Mouse Move event
//onMouseOver for Mouse Over event
//onMouseOut for Mouse Out event
//onMouseEnter for Mouse Enter event
//onMouseLeave for Mouse Leave event
//onKeyDown for Key Down event
//onKeyUp for Key Up event
//onFocus for Focus event
//onBlur for Blur event

export default InputChange
