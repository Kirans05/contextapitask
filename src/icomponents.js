import React from 'react'
import { NavLink, Route, Routes } from 'react-router-dom'
import Editdata from './editdata'
import Input from './input'
import Table from './table'
import Viewdata from './viewdata'
import "./components.css"

function Ccomponents({appdata}) {
    const receivedata = (data) => {
        appdata(data)
    }

  return (
    <div className='components'>
        <NavLink to={"/input"} ><button className='addbtn'>Add Data</button></NavLink>
        <br />
        <br />
        <Routes>
            <Route path='/' element={<Table  />} /> 
            <Route path='/edit' element={<Editdata  />} /> 
            <Route path='/view/:id' element={<Viewdata  />} /> 
            <Route path='/input' element={<Input receivedata={receivedata}/>} />
        </Routes>
        
    </div>
  )
}

export default Ccomponents