import React from 'react'

//建立子元件
function MyComponent (props) {
    // props.c();
    return <>
        <div>Hello!標準寫法</div>
        {/* 標準寫法 */}
        <div>{props.a}</div>
        <div>{props.b}</div>
        {props.c()}
    </>     
}

// 物件解構=>{物件成員}
function MyComponent2 ({a,b,c}) {
    // c();
    return <>
        <div>Hello!簡化寫法</div>
        {/* 簡化寫法 */}
        <div>{a}</div>
        <div>{b}</div>
        {c()}
    </>     
}

// 物件解構=>{物件成員}
function MyComponent3 ({a,b="我是預設值",c}) {
    // c();
    return <>
        <div>Hello!預設屬性值</div>
        {/* 簡化寫法 */}
        <div>{a}</div>
        <div>{b}</div>
        {c()}
    </>     
}

// 父元件
const App0819 = () => {
  return (
    //呼叫元件
    <>
        <MyComponent a="我是屬性a" b="我是屬性b" c={() => {console.log("123")}}/>
        <MyComponent2 a="我是屬性a" b="我是屬性b" c={() => {console.log("456")}}/>
        <MyComponent3 a="我是屬性a" c={() => {console.log("789")}}/>
    </>
  )
}

export default App0819