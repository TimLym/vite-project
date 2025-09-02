import $ from "jquery"
import "../css/app0826.scss"
import { useEffect } from "react"

const App = () => {
    useEffect(() => {
        // 當滑鼠滑入時圖片放大
        $(".zoom").on("mouseover", () => {
            $(".zoom").addClass("img-scale");
        })
        // 當滑鼠離開時圖片復原
        $(".zoom").on("mouseleave", function() {
            $(this).removeClass("img-scale");
        })
    },[])

    return (
        <div>
            <h1>useEffect</h1>
            <h2>jQuery - 圖片縮放</h2>
            <a href="#" className="zoom" >
                <img src="./images/p3.jpg" alt="" />
            </a>
        </div>
    )
}

export default App