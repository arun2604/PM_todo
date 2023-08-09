import axios from 'axios'

function Todo(props: any) {
    const { data,setData } = props

    const handleSubmit = (item: any) => {

    const updatedData = data.map((ak: any) => {
        if (ak._id === item._id) {
            axios.patch(`http://127.0.0.1:3001/api/v1/todos/${item._id}`,{isActive:!item.isActive})
            return { ...ak, isActive: !ak.isActive };
        }
        return ak;
    });
        setData(updatedData);
        console.log(data);
    }
    return (
        <div>{
            <table className="table">
                <thead>
                    <td>id</td>
                    <td>name</td>
                    <td>check box</td>
                </thead>
                <tbody>
                    {
                        data.map((item: any) => (
                                <tr key={item._id}>
                                    <td>{ item._id }</td>
                                    <td>{item.title}</td>
                                    <input type="checkbox" name="" checked={item.isActive}
                                        onChange ={() => handleSubmit(item)}/>
                                </tr>
                            ))
                    }
                </tbody>
            </table>
        }
        </div>
    )
}

export default Todo
