import React, { useEffect, useState } from 'react';
import './App.css';
import Input from './comps/Input';
import Todo from './comps/Todo';
import axios from 'axios'
import dataKeys from './model/model';

interface DataType {
  todo: string
  active: boolean
}

function App() {
  const [Data,setData] = useState<DataType []>([])
  useEffect(() => {
    const getDetails = async() => {
      let res = await axios.get('http://127.0.0.1:3001/api/v1/todos')
      setData(res.data.data.todos);
    }
    getDetails()
    dataKeys()
  },[])

  return (
    <div className="App">
      <Input data={Data} setData={ setData} />
      <Todo data={Data} setData={setData} />
    </div>
  );
}

export default App;
