import axios from 'axios'

let b
const dataKeys = async () => {
    let res = await axios.get('http://127.0.0.1:3001/api/v1/todos')
       b = await Object.keys(res.data.data.todos[0]);
    console.log(b);
}

export default dataKeys