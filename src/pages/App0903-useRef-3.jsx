import React, { useRef } from 'react'

const App = () => {
  const yellowRef = useRef(null)
  const greenRef = useRef(null)
  const greenBtn = ()=>{
    window.scrollTo({
      top: greenRef.current.offsetTop,
      behavior: 'smooth'
    })    
  };
  const yellowBtn = ()=>{
    window.scrollTo({
      top: yellowRef.current.offsetTop,
      behavior: 'smooth'
    })    
  };
  return (
    <div className='wrap'>
      <h1>useRef - 滑動到指定位置</h1>
      <div style={{background: "yellow", height:"100vh"}} ref={yellowRef}>
        <button onClick={greenBtn}>green</button>
      </div>
      <div style={{background: "green", height:"100vh"}} ref={greenRef}>
        <button onClick={yellowBtn}>yellow</button>
      </div>
    </div>
  )
}

export default App