import React, { useState } from 'react'

const EditForm = ({ todo, todoEdit

 }) => {
    const [inputText, setInputText] = useState(todo.content);
    
    const handleClickEdit = () => {
        // console.log(inputText.length);
        if (inputText.length === 0) {
            alert("事項為空，請重新輸入");
        } else {
            todoEdit(todo.id, inputText);
        }
        let inputBorder = document.getElementById("inputText");
        inputBorder.focus();

    }

    return (
        <form className='create-form' >
            <input
                type="text"
                placeholder='輸入代辦事項'
                value={inputText}
                onChange={(e) => setInputText(e.target.value.trim())}
                id='inputText'
            />
            <button type="button" onClick={handleClickEdit}>完成</button>



        </form>
    );
};

export default EditForm;
