import React from 'react'
import "./Page1.css"
function Page1() {
  return (
    <div className='loginform'>
      <h1 className='login-title'>Log in </h1>
      <form action="" className='logininfo'>
        <input type="text" placeholder='name' />
        <input type="password" placeholder='mot de passe' />
        <button type='submit'>submit</button>
      </form>
    </div>
  )
}

export default Page1
