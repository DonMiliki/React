
import React from 'react'

export default function ChildComponent(props){
 return(
    <div>
        <h1>Hello, the username is {props.username}</h1>
        <p>The gender is {props.gender}</p>
        <p>The age is {props.age}</p>
        <p>The message is {props.message}</p>
    </div>
 )   
}