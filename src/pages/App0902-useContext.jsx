import React, { useContext, useState } from 'react'

// 建立useContext, 可以跨元件使用
const Context = React.createContext();
const App = () => {
    const [signedIn,setSignedIn] = useState(false);
    const [userName, setUserName] = useState("");

    // 建立Nav元件
    const Nav = ()=>{
        return(
            <div className="nav">
                <Btn/>
            </div>
        )
    }
    // 建立按鈕
    const Btn = ()=> {
        // 建立登入/登出變數
        const [signedIn, setSignedIn,userName,setUserName]= useContext(Context);
        return (
            <button onClick={()=>{
                userName.trim().length == 0 ? alert("帳號不能為空!")
                :setSignedIn(!signedIn), signedIn?setUserName(""):setUserName(userName) }}
                >
                {signedIn?"登出" : "登入"}
            </button>
        )
    }
    return (
        <div>
            <h1> useContext-跨元件使用變數與函式</h1>
            <hr />
            <Context.Provider value={[signedIn, setSignedIn, userName, setUserName]}>
                {!signedIn && (<>帳號：<input type="text" value={userName} onChange={(e)=>{setUserName(e.target.value)}}/></>)}
                
                <Nav/>
                <p>{signedIn? `Hello!${userName}` : "未登入" }</p>
                <h2>{signedIn?"Signed Out" :"Signed In"}</h2>
            </Context.Provider>
        </div>
    )
}

export default App