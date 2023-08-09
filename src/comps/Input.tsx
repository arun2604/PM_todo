import React, { useState } from 'react'
import axios from "axios"

function Input(props: any) {
    const {data,setData} = props
    const [input, setInput] = useState<string>('')
    const handleSubmit = () => {
        const obj = {
            title: input,
            isActive:false
        }
        setData([...data, obj])
        axios.post('http://127.0.0.1:3001/api/v1/todos', obj)
    }
  return (
      <div>
          <div className="container">
              <h2>Enter todo</h2>
              <input type="text" onChange={(e)=> setInput(e.target.value)} />
              <input type="button" value="Submit" onClick={handleSubmit} />
          </div>
    </div>
  )
}

export default Input
