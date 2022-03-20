import React, { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { user } from './context'


function Viewdata() {
    const {id} = useParams()
    const navigate = useNavigate()
    const value = useContext(user)
    const datalist = value.list.filter(item => item.id == id )
    const goback = (e) => {
        e.preventDefault()
        navigate("/")
    }
  return (
    <div className='viewdata'>
        <h1>User is : {datalist[0].user}</h1>
        <h1>Profile is : {datalist[0].profile}</h1>
        <button onClick={goback} className="viewbtn1">Go Back</button>
    </div>
  )
}

export default Viewdata