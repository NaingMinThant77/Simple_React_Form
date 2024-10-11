import React, {useReducer} from 'react'
import Card from './Card'

const initialState = {name: '', live: '', email: ''}
const reducer = (state, action) => {
  switch(action.type) {
    case 'INPUT_CHANGE' : return {...state, [action.field]: action.value}
    case 'CLEAR_FORM': return initialState
    default: return state;
  }
}

function Form(props) {
  const [state, dispatch] = useReducer(reducer, initialState)

  const addUser = (event) => {
    event.preventDefault();
    if(state.name.trim().length === 0 || state.live.trim().length === 0  || state.email.trim().length === 0 ) {
      alert("Please fill a valid value for all inputs");
      return
    }
    const userInfo = {
      name: state.name, live: state.live, email: state.email
    }
    props.getUserInfo(userInfo);

    dispatch({type: 'CLEAR_FORM'})
  }

  const handleChange = (event) => {
    dispatch({type: 'INPUT_CHANGE', field: event.target.id, value: event.target.value})
  }

  return (
    <Card>
      <form onSubmit={addUser}>
        <div className='form-div'>
          <label htmlFor='name'>Name</label>
          <input type="text" id='name' value={state.name} onChange={handleChange}/>
        </div>
        <div className='form-div'>
          <label htmlFor='live'>Live</label>
          <input type="text" id='live'   value={state.live} onChange={handleChange}/>
        </div>
        <div className='form-div'>
          <label htmlFor='email'>Email</label>
          <input type="text" id='email'  value={state.email} onChange={handleChange}/>
        </div>
        <button type="submit" className='btn'>Add User</button>
      </form>
    </Card>
  )
}

export default Form