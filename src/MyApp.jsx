import { Route, Routes } from "react-router-dom"
import Footer from "../src/components/Footer"
import Nav from "../src/components/Nav"
import Home from "./pages/Home"
import About from "./pages/About"
import News from "./pages/News"

const MyApp = () => {
  return (
    <div className='wrap'>
        <Nav></Nav>
        <hr />
        
        <Routes>
          {/* 指向首頁 */}
          <Route path="/" element={<Home/>}></Route>
          {/* 指向Anout */}
          <Route path="/about" element={<About/>}></Route>
          {/* 指向News */}
          <Route path="/news" element={<News/>}></Route>
        </Routes>

        <Footer></Footer>
    </div>
  )
}

export default MyApp