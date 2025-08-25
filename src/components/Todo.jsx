import React from 'react'
import { RiDeleteBackLine } from "react-icons/ri";
import { FiEdit3 } from "react-icons/fi";
import EditForm from './EditForm';


const Todo = ({todo, delTodo, toggleFinished, toggleEdit, todoEdit}) => {
  
  return (
    todo.isEdit ? <EditForm todo={todo} todoEdit={todoEdit} />
      :<div className={`todo ${todo.isFinished ? "finished" : ""}`}>
          <p onClick={()=>{toggleFinished(todo.id)}}>{todo.content}</p>
          <div className='use-button'>
              <FiEdit3 id='edit' onClick={()=>{toggleEdit(todo.id)}}/>
              <RiDeleteBackLine id='del' onClick={()=>{delTodo(todo.id)}}/>
          </div>

      </div>
  )
}

export default Todo