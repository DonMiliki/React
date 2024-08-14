import React,{useState} from 'react'

export default function Form() {
 const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",

 })

 const handleInputChange = (event) =>{
    const {name, value} = event.target;
    setFormData({...formData, [name]: value});
 }
const handleSubmit = (event) =>{
 event.preventDefault();
 alert(`First name is ${formData.firstname} and the last name is ${formData.lastname}`)
//  console.log(formData, "data")
}

  return (
    <div>
        <form className='grid grid-flow-col auto-cols-max' onSubmit={handleSubmit}>
            <label>Firstname</label>
            <input type ="text"
            name="firstname"
            value={formData.firstname}
            onChange={handleInputChange}
            />

            <label>Lastname</label>
            <input
            type="text"
            name="lastname"
            value={formData.lastname}
            onChange={handleInputChange}
            />

            <label>Email</label>
            <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            />

            <label>PhoneNumber</label>
            <input
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            />

            <label>Age</label>
            <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleInputChange}
            />
              

            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}