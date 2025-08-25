import React, { useState } from 'react'

const CreateForm = ({ todos, setTodos }) => {
    const [inputText, setInputText] = useState('');
    
    const handleClick = () => {
        // console.log(inputText.length);
        if (inputText.length === 0) {
            alert("事項為空，請重新輸入");
        } else {
            setTodos([
                ...todos,
                // { content: inputText, id: Math.random(), isFinished: false},
                { content: inputText, id: Math.random(), isFinished: false, isEdit: false}
            ]);
            setInputText("");
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
            <button type="button" onClick={handleClick}>加入</button>



        </form>
    );
};

export default CreateForm;
