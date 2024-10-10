import { useState } from 'react';
import FormBox from './Form';
import List from './List.jsx'

function Main() {
  const [userInfos, setUserInfos] = useState([]);

  const getUserInfo = (userInfoObj) => {
    console.log(userInfoObj);
    setUserInfos([...userInfos, userInfoObj])
  }

  return (
    <section className='main'>
        <FormBox getUserInfo={getUserInfo}/>
        <List userInfos={userInfos}/>
    </section>
  )
}

export default Main