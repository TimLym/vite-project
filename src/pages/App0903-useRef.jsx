import React, { useRef } from 'react'

const App = () => {
    {/* 等於取得input DOM 屬性 */}
    const inputRef = useRef(null);
    
    function handleBtn () {
        console.log(inputRef.current.value)
        console.log(inputRef)
        // 可以更改類型
        console.log(inputRef.current.type)
        inputRef.current.type= "number"
        console.log(inputRef.current.type)
    }
  return (
    <div className='wrap'>
        <h1>useRef</h1>
        <hr />
        {/* 等於取得input監聽 */}
        <input type="text" ref={inputRef}/>
        <button onClick={handleBtn}>click</button>
    </div>
  )
}

export default App