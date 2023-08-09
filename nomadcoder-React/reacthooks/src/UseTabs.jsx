/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";

function UseInputhooks() {

    const content = [
        {
            tab: "Section 1",
            content: "내용 1 입니다."
        },
        {
            tab: "Section 2",
            content: "내용 2 입니다."
        },
    ];

    const useTabs = (initialTab, allTabs) => {
        if(!allTabs || !Array.isArray(allTabs)){ // 조건이 일치시 리턴
            return; 
        }
        
        const [currentIndex, setCurrentIndex] = useState(initialTab); 
        return{
            currentItem: allTabs[currentIndex], // Item은 Tabs의 값을 리턴하고 index값을 가진다. 
            changeItem: setCurrentIndex // 값 변경 하기 
        }
    }

    const {currentItem, changeItem} = useTabs(0, content); //여기에 (, content) 값을 넘겨준다.

    return(
        <div>
            <h1>Hello</h1>
            {content.map((section, index) => ( // map을 이용하여 배열 내용을 가져 옴
                <button onClick={()=> changeItem(index)}>{section.tab}</button>
            ))}
            <div>
                {currentItem.content}
            </div>
        </div>
    )
}

export default UseInputhooks;