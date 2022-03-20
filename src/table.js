import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import {user} from "./context"

function Table() {
    const value = useContext(user)
    const {list,edithandler,deletehandler} = value
  return (
    <div>
        {
            list == "" ? <h1>No Data</h1>
            : (
                <table className='table'>
                <thead>
                    <tr className='trhead'>
                        <th className='th'>SL.NO</th>
                        <th className='th'>USER</th>
                        <th className='th'>PROFILE</th>
                        <th colSpan={"3"} className="th">ACTIONS</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        list.map((item,index) => {
                            return (
                                <tr key={index} className="bodytr">
                                    <td>{index+1}</td>
                                    <td>{item.user}</td>
                                    <td>{item.profile}</td>
                                    <td>
                                        <NavLink to={`/view/${item.id}`}><button className='viewbtn'>View</button></NavLink>
                                    </td>
                                    <td>
                                        <NavLink to="/edit" >
                                            <button onClick={()=>edithandler(item)} className="editbtn">Edit</button>
                                        </NavLink>
                                    </td>
                                    <td>
                                        <button onClick={()=>deletehandler(item)} className="dltbtn">Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            )
        }
    </div>
  )
}

export default Table