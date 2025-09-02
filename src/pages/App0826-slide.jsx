import React, { useEffect, useState } from 'react'
import "../css/App0826slide.scss"
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { IoArrowForwardCircleOutline } from "react-icons/io5";

const App = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const slides = [
        { url: "./images/p3.jpg" },
        { url: "./images/p5.jpg" },
        { url: "./images/p7.jpg" },
        { url: "./images/p9.jpg" }
    ]

    useEffect(() => {
        // 每3秒呼叫nextSlide()換下一張圖
        const autoplay = setInterval(() => {
            nextSlide();
        }, 3000);
        // 每3秒後，移除autoplay，這樣才能取得最新的索引編號
        return () => clearInterval(autoplay);
    }, [currentIndex]);

    const Arrow = ({direction, onClick}) =>{
        return (
            direction === "left"
            ?(<IoArrowBackCircleOutline onClick={onClick}/>)
            :(<IoArrowForwardCircleOutline onClick={onClick}/>)
        )
    }

    //上一張
    const prevSlide = () =>{
        setCurrentIndex((prevIndex)=>(
            prevIndex === 0 
            ?slides.length-1
            :prevIndex-1
        ))
    }

    // 下一張
    const nextSlide = () =>{
        setCurrentIndex((prevIndex)=>(
            
            prevIndex === slides.length -1
            ? 0
            : prevIndex+1
        ))
    }

    return (
        <>
            <h1>輪播</h1>
            <div className="wrap">
                <div className="slide">
                    <div className="slide-img" style={{backgroundImage: `url(${slides[currentIndex].url})`}}>
                        
                    </div>
                </div>
                <div className="arrow">
                    {/* 箭頭 */}
                    <Arrow direction={"left"} onClick={prevSlide}/>
                    <Arrow direction={"right"} onClick={nextSlide}/>
                </div>
            </div>
        </>
    )
}

export default App