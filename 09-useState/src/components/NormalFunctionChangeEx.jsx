import React from 'react'

const NormalFunctionChangeEx = () => {

let a = 10;

//lets say we have function that changes the value of a
function changeA(){
  console.log(a);  
  let a = 20;
  console.log(a);
}

//it will change but won't display in screen because 
// react doesn't know that it has to re-render the component 
// as we are not using useState here. React only re-renders 
// the component when there is a change in state or props. 
// Here we are changing the value of a but it's not a state variable, 
// so react doesn't re-render the component and we won't 
// see the updated value of a on the screen.

  return (
    <div>
      <p>Value of a is {a}</p>
      <button onClick={changeA} className='px-2 py-1 bg-blue-500 text-white rounded'>Click To Change</button>
       
    </div>
  )
}

export default NormalFunctionChangeEx
