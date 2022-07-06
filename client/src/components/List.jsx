import React from 'react'
import { useState } from 'react'

export default function List() {
  const contact=['arun','karthi','gowtham','gas'];
  const [search,setSearch]=useState('');

  
    return (
    <div>
        <input type="search" onChange={e =>{setSearch(e.target.value)}}  />
       <ul>
        {
                contact.filter((v)=>{
                    if(search!==''){
                        return v.toLowerCase().includes(search.toLowerCase())
                    }
                    else {
                        return v
                    }
                }).map((v,i)=>{
                    return <li key={i+1}>{v}</li>
                })
           
        }
        </ul>
    </div>
  )
}
