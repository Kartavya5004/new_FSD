import React from 'react'

const Login = () => {
  const [uname , setUstate] = React.useState("");
  const [pass , setPass] = React.useState("");
  return (
    <div className='login'>
      <h1>Sign_in</h1>
      <form>
        UserName:
        <input type='text' value={uname} placeholder="Enter username" onChange={(e) => setUname(e.target.value)}/>
        <br/>
        <input type='password' value={pass} placeholder='Enter password' onChange={(e) => setPass(e.target.value)}/>
      </form>
    </div>
  )
}

export default Login
