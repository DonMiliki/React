import React from 'react'
import {Link } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="bg-gray-800">
        <ul className="flex h-16 items-center justify-between">
            <li className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
            <Link to="/">Home</Link>
            </li>
            <li className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
            <Link to="/about">About</Link>
            </li>
            <li className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
            <Link to="/contact">Contact</Link>
            </li>
            <li className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
            <Link to="/contact">Services</Link>
            </li>
        </ul>
    </nav>

    
     
  
            
            
  
  
  )
}