import React from 'react'

export default function UserList() {
    const user = [
        {id: '1', firstname: 'Michael', lastname: 'Okezie', email: 'milikiyoo@yahoo.com', phoneNumber: "08036136725"},
        {id: '2', firstname: 'Prisca', lastname: 'Okezie', email: 'prisca@yahoo.com', phoneNumber: "08036136726"},
        {id: '3', firstname: 'Gabriel', lastname: 'Okezie', email: 'gabriel@yahoo.com', phoneNumber: "08036136727"},
        {id: '4', firstname: 'Claire', lastname: 'Okezie', email: 'claire@gmail.com', phoneNumber: "08036136728"},
        {id: '5', firstname: 'Raphael', lastname: 'Okezie', email: 'ralph@gmail.com', phoneNumber: "08036136729"},
        
    ]
  return (
    <>
    <h1>The attribute that allows React to keep track of elements in lists is the Key Attribute which ensures that only updated items are rendered instead of the whole items.</h1>
    <ol>
        {user.map(details =>(
            <li key={details.id}>
                <p>FirstName: <b>{details.firstname}</b></p>
                <p>Email: {details.email}</p>
                 
            </li>
        ))}
    </ol>
    
    </>
    
  )
}
  