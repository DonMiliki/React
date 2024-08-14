import React from 'react'

export default function List() {

    const items =['Apple', 'Banana', 'Orange', 'Grapes']
    const money = [
        {id: '1', details: 'Payment to Supplier X', amount: 'N600.00', date: "2024-08-01"},
        {id: '2', details: 'Payment to Supplier A', amount: 'N4000.00', date: "2024-08-04"},
        {id: '3', details: 'Payment to Supplier B', amount: 'N200.00', date: "2024-08-08"},
        {id: '4', details: 'Payment to Supplier C', amount: 'N100.00', date: "2024-08-21"},
        {id: '5', details: 'Payment to Supplier F', amount: 'N60.00', date: "2023-08-01"},
        {id: '6', details: 'Payment to Supplier G', amount: 'N2600.00', date: "2024-07-01"},
    ]
  return (
    <>
    <ol>
        {money.map(transaction =>(
            <li key={transaction.id}>
                <p>Id: {transaction.id}</p>
                <p>Details: {transaction.details}</p>
                <p>Amount: {transaction.amount}</p>
                <p>Date: {transaction.date}</p>
            </li>
        ))}
    </ol>
    <ul>
        {items.map((item, index) =>(
        
        <li key={index}>{item}</li>

        ))}
    </ul>
    </>
    // <div>What is a List
    //     A list refers to an array or iterable collection of elements that you want 
    //     to render dynamically within your components.

    //     rendering a list in react involves mapping over an array and creating react
    //     elements for react item in the array.

    //     javascript map() method
    // </div>
  )
}