import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home6 from "./routes/Home6";
import Diary6 from "./routes/Diary6";
import Write6 from "./routes/Write6";

export default function Main6 () {

    // 리액트 라우터 돔 6버전 
    return(
        <BrowserRouter >
            <div>
                <h1>리액트 라우터 돔 6버전 입니다.</h1>
                <Routes>
                    <Route path="/" element={<Home6 />} />
                    <Route path="/Write" element={<Write6 />} />
                    <Route path="/Diary/:id" element={<Diary6 />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}