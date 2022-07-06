import React,{useState,useEffect} from 'react'
import Axios from 'axios'
import {Table} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {Edit} from '../Redux/UserReducer'

export default function Userlist() {
    const[employee,setEmployee]=useState([])
    const [refresh,setRefresh]=useState('')
    const dispatch=useDispatch();
   
   // to get the value from database
    useEffect(() => {
            Axios.get('http://localhost:3002/users')
            .then((res)=>{
                setEmployee(res.data)
            });
    },[refresh])
    
    // to delete the value from database
    const handleDelete=(id)=>{
      Axios.delete(`http://localhost:3002/delete/${id}`);
      setRefresh(id)
    }
   
    return (
    <div>
        <Table striped bordered hover>
  <thead>
    <tr>
      <th>S.No</th>
      <th>Name</th>
      <th>Age</th>
      <th>Email</th>
      <th>Contact</th>
    </tr>
  </thead>
  <tbody>
    {
      employee.map((v,i)=>(
     <tr key={v.id}>
      <td>{i+1}</td>
      <td>{v.name}</td>
      <td>{v.age}</td>
      <td>{v.email}</td>
      <td>{v.contact}</td>
     <td> <Link to='/useredit' className='btn btn-warning' onClick={()=>{dispatch(Edit({id:v.id,name:v.name,age:v.age,email:v.email,contact:v.contact}))}}>Edit</Link></td>
     <td><button className='btn btn-danger' onClick={()=>{handleDelete(v.id)}}>Delete</button></td>
    </tr>
      ))
      }
    
  </tbody>
</Table>
<hr />
   <div className='d-flex justify-content-center '>
   <Link className='btn btn-primary' to='/'>Add more</Link>
   </div>
    </div>
  )
}
