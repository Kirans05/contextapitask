import React, { useState } from 'react'
import {nanoid} from "nanoid"   
import { useNavigate } from 'react-router-dom'


function Input({receivedata}) {
    const navigate = useNavigate()
    const [values,setvalues] = useState({
        user:"",
        profile:""
    })

    const inputchange = (e) => {
        e.preventDefault()

        setvalues({...values,[e.target.name]:e.target.value})
    }
    const submithandler = (e) => {
        e.preventDefault()

        const newlist = {
            id:nanoid(),
            user:values.user,
            profile:values.profile
        }
        setvalues({
            user:"",
            profile:""
        })
        receivedata(newlist)
        navigate("/")
    }
  return (
    <div>
        <form onSubmit={submithandler} className="form">
            <input type={"text"} placeholder="Enter a Name" required="required" name="user" onChange={inputchange} value={values.user}/>
            <br />
            <br />
            <input type={"text"} placeholder="Enter a Profile" required="required" name="profile" value={values.profile} onChange={inputchange}/>
            <br />
            <br />
            <button>Submit</button>
        </form>
    </div>
  )
}

export default Input