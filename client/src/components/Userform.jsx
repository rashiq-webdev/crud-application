import React,{useEffect} from 'react'
import { useState } from 'react'
import Axios from 'axios'
import { Link } from 'react-router-dom'

export default function Userform() {

    const [name,setName]=useState('')
    const [age,setAge]=useState('')
    const [email,setEmail]=useState('')
    const [contact,setContact]=useState('')
    const[user,setUser]=useState([])

    useEffect(() => {
      Axios.get('http://localhost:3002/users')
      .then((res)=>{
        setUser(res.data)
      });
},[])

    const employee={
            name:name,
            age:age,
            email:email,
            contact:contact
    }

    const onSubmit=()=>{

      const nameCheck=user.find((v)=> v.name==name)

      if(!name||!age||!email||!contact){ 
        alert("The fields can't be empty");
        }
        else if(nameCheck){
          alert('name already exist');
        }
        else{
            Axios.post('http://localhost:3002/create',employee)
            .then(()=>{
                alert('value is added')
                setName('');
                setAge('');
                setEmail('');
                setContact('');
            })
        }
    }
   

    // const getEmployee=()=>{
    //     Axios.get('http://localhost:3002/users')
    //     .then((res)=>{
    //         setEmployee(res.data)
    //     });
        
    // }

    
  return (
    <div className='user'>
        <div className='form'>
          <h1>Form</h1>
        <label>Name:</label>
        <input type="text" value={name} placeholder='Mohammed...' onChange={(e)=>{setName(e.target.value)}} />
        <label>Age:</label>
        <input type="number"  value={age} placeholder='24...' onChange={(e)=>{setAge(e.target.value)}}/>
        <label>Email:</label>
        <input type="text"  value={email} placeholder='@mail.com...' onChange={(e)=>{setEmail(e.target.value)}}/>
        <label>Contact:</label>
        <input type="number"   value={contact} placeholder='0123456789...' onChange={(e)=>{setContact(e.target.value)}}/>
        <button className='btn btn-primary cl' onClick={onSubmit}>Add User</button>
        <hr/>
         <Link className='btn btn-primary cl' to="userlist">Show Users</Link>
        </div> 
    </div>
  )
}
