import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { user } from './context'

function Editdata() {
    const navigate = useNavigate()
    const value = useContext(user)
    const [editbvalue,seteditbvalue] = useState({
        id:"",
        user:"",
        profile:""
    })
    useEffect(()=>{
        seteditbvalue({
            id:value.editdata.id,
            user:value.editdata.user,
            profile:value.editdata.profile
        })
    },[])

    const inputchange = (e) => {
        e.preventDefault()
        seteditbvalue({...editbvalue,[e.target.name]:e.target.value})
    }

    const submithandler =(e) => {
        e.preventDefault()
        navigate("/")
        value.edited(editbvalue)
    }
  return (
    <div>
        <form onSubmit={submithandler} className="editform">
            <input type={"text"} placeholder="Enter a User" value={editbvalue.user} onChange={inputchange} name="user"/>
            <br />
            <br />
            <input type={"text"} placeholder="Enter a Profile" value={editbvalue.profile} onChange={inputchange} name="profile"/>
            <br />
            <br />
            <button>Submit</button>
        </form>
    </div>
  )
}

export default Editdata