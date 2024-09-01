import { Link, Route, Routes, useLocation, useParams } from "react-router-dom";

export default function Router () {
    return(
        <Routes>
            <Route path="/" element={<First />}/>
            <Route path="/second" element={<Second />}/>
            <Route path="/blog/:id" element={<Blog />}/>
            <Route path="/blog2/:id" element={<Blog2 />}/>
        </Routes>
    );
}

export function First () {
    return (
        <div>
            <div>
                <Link to="/blog/1"> blog_1 </Link>
                <Link to="/blog/2"> blog_2 </Link>
                <Link to="/blog/3"> blog_3 </Link>
            </div>
            <div>
                <Link to="/blog2/1"> blog2_1 </Link>
                <Link to="/blog2/2"> blog2_2 </Link>
                <Link to="/blog2/3"> blog2_3 </Link>
            </div>
            <h1>안녕하세요.</h1>
            <Link to="/second">Second로 이동</Link>
        </div>
    );
}

function Second () {
    return <h1>안녕하세요. 두번째</h1>
}

function Blog(){
	const location = useLocation();
    console.log(location)
    return <h1>hello Blog</h1>
}

function Blog2(){
	const {id} = useParams();
    return <h1>hello Blog {id}</h1>
}