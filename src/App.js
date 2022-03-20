import React, { useState } from 'react'
import { Provider } from './context'
import Ccomponents from './icomponents'

function App() {
    const [list,setlist] = useState([])
    const [editdata,seteditdata] = useState("")

    const appdata = (data) => {
        setlist([...list,data])
    } 

    const deletehandler = (data) => {
        const newarr = [...list]
        const position = list.findIndex(item => item.id == data.id)
        newarr.splice(position,1)
        setlist(newarr)
    }

    const edithandler = (data) => {
        seteditdata(data)
    }   

    const edited = (data) => {
        const position = list.findIndex(item => item.id == data.id)
        const newarr = [...list]
        newarr[position] = data
        setlist(newarr)
    }
  return (
    <div className='app'>
        <Provider value={{list:list,edithandler:edithandler,deletehandler:deletehandler,editdata:editdata,edited:edited}}>
            <Ccomponents appdata={appdata}/>
        </Provider>
    </div>
  )
}

export default App