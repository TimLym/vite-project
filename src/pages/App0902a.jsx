import React, { useMemo, useState } from 'react'
import "../css/app0902.scss"
const App = () => {
    // 表格資料
    const arrProd = [
        {
            id: 1,
            prodName: "筆電",
            prodPrice: 99,
            prodImgUrl: "./images/p1.jpg"
        },
        {
            id: 2,
            prodName: "人物1",
            prodPrice: 109,
            prodImgUrl: "./images/p2.jpg"
        },
        {
            id: 3,
            prodName: "人物2",
            prodPrice: 19,
            prodImgUrl: "./images/p3.jpg"
        },
        {
            id: 4,
            prodName: "自拍視角",
            prodPrice: 89,
            prodImgUrl: "./images/p4.jpg"
        },
        {
            id: 5,
            prodName: "街景",
            prodPrice: 139,
            prodImgUrl: "./images/p5.jpg"
        },
    ];
    // 表格元件
    const ProdTable = ({filterProds}) => {
        return (
            <table>
                <tbody>
                    <tr>
                        <td>產品名稱</td>
                        <td>產品圖片</td>
                        <td>價格</td>
                    </tr>
                    {filterProds.map((prod)=>(
                        <tr key={prod.id}>
                            <td>{prod.prodName}</td>
                            <td>
                                <img src={prod.prodImgUrl} alt={`pic${prod.id}`}/>
                            </td>
                            <td>{prod.prodPrice}</td>
                        </tr>
                    ))}

                </tbody>
            </table>
        )
    };
    // 排序變數，預設為原陣列資料
    const [prods, setProds] = useState(arrProd);
    // 排序變數，預設為遞增
    const [ascending, setAscending] = useState(true);
    // 搜尋變數，預設為空字串
    const [search, setSearch] = useState("")

    // 建立排序變數與搜尋函式
    const filterProds = useMemo(()=>{
        return (
            [...prods]
            .sort((a,b)=>{
                return ascending ? a.prodPrice - b.prodPrice : b.prodPrice - a.prodPrice
            })
            .filter((prod)=>{
                return prod.prodName.match(search) || String(prod.prodPrice).match(search);
            })
        )
    },[ascending, search]);

    return (
        <div className="wrap">
            排序：
            <input type="checkbox" checked={ascending} onChange={(e)=>{setAscending(e.target.checked)}}/>

            <br />
            搜尋：
            <input type="text" onChange={(e)=>{setSearch(e.target.value)}}/>

            {/* 表格 */}
            <ProdTable filterProds={filterProds} />
        </div>

    )
}

export default App