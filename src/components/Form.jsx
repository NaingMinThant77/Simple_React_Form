import React, {useState} from 'react'
import Card from './Card'

function Form(props) {
  const [name, setName] = useState("");
  const [live, setLive] = useState("");
  const [email, setEmail] = useState("");

  const addUser = (event) => {
    event.preventDefault();
    if(name.trim().length === 0 || live.trim().length === 0  || email.trim().length === 0 ) {
      window.confirm("Please fill a valid value for all inputs");
      // alert("Please fill a valid value for all inputs");
      return
    }
    const userInfo = {
      name, live, email
    }
    props.getUserInfo(userInfo)
    setName("")
    setLive("")
    setEmail("")
  }

  return (
    <Card>
      <form onSubmit={addUser}>
        <div className='form-div'>
          <label htmlFor='name'>Name</label>
          <input type="text" id='name' value={name} onChange={(event) => {
    setName(event.target.value);
  } }/>
        </div>
        <div className='form-div'>
          <label htmlFor='live'>Live</label>
          <input type="text" id='live' value={live} onChange={(event) => {
    setLive(event.target.value);
  } }  />
        </div>
        <div className='form-div'>
          <label htmlFor='email'>Email</label>
          <input type="text" id='email' value={email} onChange={(event) => {
    setEmail(event.target.value);
  } } />
        </div>
        <button type="submit" className='btn'>Add User</button>
      </form>
    </Card>
  )
}

export default Form