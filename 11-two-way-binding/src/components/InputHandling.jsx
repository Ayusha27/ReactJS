import React from 'react'

const InputHandling = () => {
 const [title, setTitle] = React.useState('')

// Two way binding is a concept where the value of the input 
// field is bound to the state variable and the state variable 
// is updated whenever the value of the input field changes. 
// This is achieved by using the onChange event handler to update 
// the state variable whenever the value of the input field changes. 
// The value of the input field is also set to the state variable, 
// so that it reflects the current value of the state variable.

 const submitHandler = (e) => {
    e.preventDefault()
    console.log(title)
  
 setTitle('')
 }

 const handleOnChange = (e) =>
 {
    setTitle(e.target.value)
 }


  return (
    <div>
      <form onSubmit={submitHandler}>
        <input 
        type="text" 
        placeholder='Enter your name' 
        value={title}
        onChange={handleOnChange}
        />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default InputHandling
