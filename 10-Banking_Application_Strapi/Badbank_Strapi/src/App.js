/*import {useState} from 'react';
 import Todoform from'./form_1.jsx';
 export default function Shiron(){
  const[todos,setTodos]=useState([
    {
      text:"learn react",
      isCompleted:false
    },
    {
      text:"meet friend for lunch",
      isCompleted:false
    },
    {
      text:"build  todo app",
      isCompleted:false
    },
  ]);
  const addTodo=(text)=>{
    const newTodos=[...todos,{text:text,isCompleted:false}];
    setTodos(newTodos);
  };
  const removeTodo=(e)=>{
    var index=Number(e.target.id);
    let temp=[...todos];
    temp.splice(index,1);
    setTodos(temp);
  };
  return(
    <>
    {todos.map((todo,i)=>(<div className='todo' key={i} id={i} onClick={removeTodo}>
      {todo.text}
    </div>
    ))}
    <Todoform addTodo={addTodo}/>
    </>
  )
 }*/

//  import { Button } from "react-bootstrap";
//  export default function App(props){
//    let numbers=props.menuitems;
//    const style={
//      color:"orangered",
//      fontSize:"20",
//      fontType:"Arial",
//      backgroundColor:"lightblue"
//    };
//    function handle(e){
//      alert(`You have Clicked button ${e.target.innerHTML}`)
//    }
//    return(
//      <div className="App">
//        {numbers.map((item,i)=>(
//          <Button key={i} id={i} onClick={handle} style={style}>{item}</Button> )
//        )}
//      </div>
//    )
//  }
import Bank from './unit-8/app'
// import Atm from './refactoring app'
export default function App(){
  return(
    <>
    <Bank/>
</>
)
}