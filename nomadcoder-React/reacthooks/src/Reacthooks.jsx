import { useEffect, useState } from "react";

function Reacthooks () {
    const useTitle = (initialTitle) => {
        // initialTitle은 Loading이고 

        const [title, setTitle] = useState(initialTitle);
        // title도 Loading이고 

        const updateTitle = () => {
            const htmlTitle = document.querySelector("title");
            htmlTitle.innerText = title; // Mount시 Loading이 되고 
        }
        useEffect(()=> {
            updateTitle(); // Mount가 되면 
        }, [title]); // titleUpdate가 불리게 되면 다시 updateTitle이 불러지게 되고 
        return setTitle; // 제목 업데이트 할 수 있게 함.
    }

    const titleUpdate = useTitle("Loading..."); // 기본값을 줌.

    return(
        <div>Hi</div>
    )
}

export default Reacthooks;