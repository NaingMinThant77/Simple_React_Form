import React from 'react'
import Card from './Card'

const List = (props) => {
  return (
    <>
      {
        props.userInfos.length < 1 ? (<> <Card css={"card-mt"}>
          <p>Add a new user right now!</p>
        </Card></>) : (<>
          {
            props.userInfos.map((info) => {
              return (
                <Card css={"card-mt"} key={info.email}>
                <div>
                  <p>Name: {info.name}</p>
                  <p>From: {info.live}</p>
                  <p>Email: {info.email}</p>
                </div>
              </Card>
              )
            })
          }</>)
      }
    </>
  )
}

export default List;
