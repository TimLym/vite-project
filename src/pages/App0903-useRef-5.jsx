import React, { useEffect, useRef, useState } from 'react'

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const countRef = useRef(0);
  useEffect(()=>{
    countRef.current = countRef.current + 1
  })
  

  return (
    <div className='wrap'>
      <h1>useRef - 次數異動</h1><hr />
      <input type="text" 
        value={inputValue}
        onChange={(e)=>setInputValue(e.target.value)}
      />
      <h2>文字方塊自動次數：<span>{countRef.current}</span></h2>
    </div>
  )
}

export default App