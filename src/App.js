import { useState } from 'react';
import './App.css';


function App() {
  const [data, setData] = useState("");
  const [items, setItems] = useState([]);
  const [editing, setEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  // Add items...
  let addItem = () =>{
    if(!data){

    }
    else{
      setItems([...items, data]);
      setData('')  
      //  items.push(data);
      // setItems([...items]);
    }
  }


  // Delete items...
  const deleteItem = (id) =>{
    console.log(id)
    const updateData = items.filter((elem, ind) => {
    return ind != id
    })
    setItems(updateData)
  }

  // Edit todo\

  // populte input with value that is going to be update
  const EditItems=(id) =>{
    console.log(items)
    console.log(id)
    setData(items[id])
    setEditing(true)
    setEditIndex(id)
  }

  // update the actual value agains the index and the mark the editing flag and valueto null
  const UpdateItemTodo=()=>{
      let datali = [...items]
      datali[editIndex] = data
      console.log(datali)
      setItems(datali)
      setData("")
      setEditing(false)
      setEditIndex(null)
    }

  //  Remove All items...
  const removeAll = () => {
    setItems ([])
  }

 

  
  return (
    <div className='main'>

      {/* Header */}
      <div className='todo_header text-center text-5xl font-serif my-9 text-white'>
      <h1 className=''>Todo-List</h1>
    </div>
       
       {/* todo */}
       <div className='todo_body'>
          <input className='todo_input' type='text' placeholder='Enter Yor Todo...' value={data}
          onChange={(e) => setData(e.target.value)}></input>
          {
            // if editing is tru then show edit button else show Add button
            editing ?
            <button className='todo_btn' onClick={UpdateItemTodo}>Update</button>
            :
            <button className='todo_btn' onClick={addItem}>Add</button>
          }
     <div>
         {items.map((x, i) => (
            <div className='' key={i}>
             <h4>{x}<span>
          <i 
          className="fa-solid fa-trash"
            onClick={() => deleteItem(i)}>
            </i>
             <i onClick={()=>{EditItems(i)}}
             className='fa-solid fa-pen-to-square'
             ></i>
            {/* <button className='todo_btn' onClick={()=>{UpdateItemTodo(i)}}>Add</button> */}
        </span></h4></div>
  ))}
</div>
      </div>
       
       <div className='clear_btn m-5 p-2 text-white'>
        <button onClick={removeAll}>Clear All</button>
       </div>
    </div>
  );
}
export default App;


