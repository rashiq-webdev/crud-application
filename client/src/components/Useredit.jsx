import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Axios from 'axios'
import Userlist from './Userlist'

export default function Useredit() {
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [email, setEmail] = useState('')
    const [contact, setContact] = useState('')
    const [id, setId] = useState('')
    const [change,setChange]=useState(false)
    

    const userData = useSelector(state => state.user.value)  // get the values from redux store


        // to load the value to be updated
    useEffect(() => {
        setName(userData.name);
        setAge(userData.age);
        setEmail(userData.email);
        setContact(userData.contact);
        setId(userData.id)
    }, [])

    const newData = {
        id:id,
        name: name,
        age: age,
        email: email,
        contact: contact
    }

    // to update the value in the database
    const handleUpdate = () => {
        if (name && age && email&& contact) {
            Axios.put("http://localhost:3002/update", newData)
                .then(() => {
                    console.log('updated')
                })
        }
        else {
            alert("The fields can't empty");
        }
    }


    return (
        <div className='user'>
            <div className='form'>
                <label>Name:</label>
                <input type="text" value={name} onChange={(e) => { setName(e.target.value) }} />
                <label>Age:</label>
                <input type="number" value={age} onChange={(e) => { setAge(e.target.value) }} />
                <label>Email:</label>
                <input type="text" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                <label>Contact:</label>
                <input type="number" value={contact} onChange={(e) => { setContact(e.target.value) }} />
                <hr />
                {contact&&name&&age&&email?(<Link to='/userlist'className='btn btn-primary cl'  onClick={handleUpdate}>Update</Link>):(<button className='btn btn-primary cl'  onClick={handleUpdate}>Update</button>)}
            </div>
        </div>
    )
}
