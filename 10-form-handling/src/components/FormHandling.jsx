import React from 'react'

const FormHandling = () => {

   const submitHandler = (e) => {
    e.preventDefault() //as we are using form tag, it will try to submit the form and refresh the page, 
    // to avoid that we use preventDefault() method
    //this the default behavior of form tag, 
    // it will try to submit the form and refresh the page, 
    // to avoid that we use preventDefault() method
    console.log('Form submitted!')
   } 

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input type="text" placeholder='Enter your name' className='border-2 border-gray-300 p-2 rounded-md' />
        <button type='submit' className='bg-blue-500 text-white px-4 py-2 rounded-md ml-2'>Submit</button>
      </form>
    </div>
  )
}

export default FormHandling
