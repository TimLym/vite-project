import React, { useState } from 'react'
import CreateForm from './CreateForm'
import Todo from './Todo'

const TodoWrapper = () => {
    //因為會友n的Todo，所以要用陣列存
    // const [todos, setTodos]= useState(["繳停車費", "對發票"]);
    // 因為陣列內容若有增減，索引值會異動，為避免異動資料時造成索引錯亂，改為陣列物件，key由亂數產生

    // 因為要判定todo的內容是否被點擊，所以增加isFinished屬性
    // 因為要判定todo是否修改，所以增加isEdit屬性

    const [todos, setTodos] = useState(
        [
            { content: "繳停車費", id: Math.random(), isFinished: false, isEdit: false },
            { content: "對發票", id: Math.random(), isFinished: false, isEdit: false }
        ]
    )

    // 建立 刪除todo，傳入被刪除todo的id
    const delTodo = (id) => {
        setTodos(todos.filter((todo) => {
            // 使用filter方法，保留不是被刪除的id
            return todo.id !== id
        }))
    }

    // 建立 編輯todo
    // const editTodo = (id) => {

    // }

    // 點選文字出現完成狀態，檢查被點擊的項目id是否跟陣列中id一樣
    // yes => 1. 取出todo 2. 將isFinished屬性值反向(NOT)
    // no => todo不變
    const toggleFinished = (id) => {

        setTodos(todos.map((todo) => {
            // console.log(todo);
            return todo.id === id ? { ...todo, isFinished: !todo.isFinished } : todo
        }))
    }

    const toggleEdit = (id) => {
        setTodos(todos.map((todo) => {
            // console.log(todo);
            return todo.id === id ? { ...todo, isEdit: !todo.isEdit} : todo
        }))
    }
    const todoEdit = (id, editContent) => {
        setTodos(todos.map((todo) => {
            return todo.id === id ? { ...todo, isEdit: false, content:editContent} : todo
        }))
    }

    return (
        <div className="wrapper">
            <h1>代辦事項</h1>
            <CreateForm todos={todos} setTodos={setTodos} />
            {
                todos.map((todo) => {
                    return <
                        Todo key={todo.id}
                        todo={todo}
                        delTodo={delTodo}
                        toggleFinished={toggleFinished}
                        toggleEdit={toggleEdit}
                        todoEdit={todoEdit}
                    />
                })
            }
        </div>
    )
}

export default TodoWrapper