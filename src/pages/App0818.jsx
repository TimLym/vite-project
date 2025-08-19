import React, { useState } from 'react'

const MyComponent = () => {
    const [count, setCount] = useState(0);
    const handleClick = () => {
        setCount(count + 1);
        console.log(count);
    }
    return (
        <button id='btn1' onClick={handleClick}>點擊次數:{count}</button>
    )
}

const App0818 = () => {

    return (
        <MyComponent/>
    )
}

export default App0818