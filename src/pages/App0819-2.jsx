import React from 'react'

// 次元件
function SecondComponent({b}) {
    // console.log(props);
    return <>
        <h3>我是secondComponent元件</h3>
        {b}
    </>
    
}


function ThirdComponent() {
    return <h3>我是thirdComponent元件</h3>
}

// 子元件
function FirstComponent({a, children }) {
    // console.log(props);
    return <>
        <h2>我是FirstComponet元件 (接收來自於主元件的傳遞)</h2>
        {a}
        {/* <SecondComponent /> */}
        {children[0]}
    </>
}

function FirstComponent2({a}) {
    // console.log(props);
    return <>
        <h2>我是FirstComponet2元件 (接收主元件的傳遞，傳送次元件)</h2>
        {a}
        <SecondComponent b="SecondComponent的屬性b"/>
    </>
}

const App0819 = () => {
    return (
        <div>
            <h1>元件之間，傳遞元件</h1> <hr />
            <FirstComponent a="FirstComponent的屬性a">
                <SecondComponent b="SecondComponent的屬性b"></SecondComponent>
                <ThirdComponent></ThirdComponent>
            </FirstComponent>
            <hr />
            <FirstComponent2 a="FirstComponen2的屬性a"/>
        </div>
    )
}

export default App0819