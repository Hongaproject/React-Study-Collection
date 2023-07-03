import { useState, useEffect, useRef } from "react";
import SkillfrontExplain from "./skillfrontExplain";
import SkillcsstoolExplain from "./skillcsstoolExplain";
import { styled } from "styled-components";

export default function Skills() {

    // const [modal, setModal] = useState(false);
    // const [ctmodal, setCTmodal] =useState(false);
   
    // const clickFront = () => {
    //     setModal(!modal);
    // }

    // const clickCT = () => {
    //     setCTmodal(!ctmodal);
    // }

    const [modal, setModal] = useState(null);
    const [ctmodal, setCTmodal] =useState(null);

    const clickFront = () => {
        setModal(true);
        setCTmodal(false);
    }

    const clickCT = () => {
        setCTmodal(true);
    }

    console.log(modal);
    console.log(ctmodal);


    const [submodal, setsubModal] = useState(false);
    const outside = useRef();


    return(
        <div className="mb-8 leading-relaxed ">
            <button onClick={ () => setsubModal(true) } className="flex flex-wrap">
                <div className="flex" onClick={clickFront}>
                    <img src="/html.png" width="48" height="48" alt="html5" title="HTML5" />
                    <img src="/css.png" width="48" height="48" alt="css3" title="CSS3" />
                    <img src="/js.png" width="48" height="48" alt="js" title="JavaScript" />
                    <img src="/ts.png" width="48" height="48" alt="ts" title="TypeScript" />
                    <img src="/react.png" width="48" height="48" alt="react" title="React" />
                    <img src="/nextjs.png" className="mr-1" width="48" height="48" alt="nextjs" title="Next.js" />
                </div>
                <div className="flex" onClick={clickCT}>
                    <img src="/tailwind.png" className="mr-1.5" width="48" height="48" alt="tailwind" title="Tailwind" />
                    <img src="/mui.png" width="48" height="48" alt="mui" title="Material-UI" />
                    <img src="/bootstrap.png" width="48" height="48" alt="bootstrap" title="Bootstrap" />
                    <img src="/github.png" width="48" height="48" alt="github" title="Github" />
                    <img src="/notion.png" width="48" height="48" alt="notion" title="Notion" />
                </div>
            </button>
            {/* {modal === null && ctmodal === null ? null : ctmodal && modal ?  <SkillcsstoolExplain />  :  <SkillfrontExplain /> } */}

            <>
                {
                    submodal &&
                    <div ref={outside} onClick={ (e) => { if(e.target == outside.current) setsubModal(false) } }>
                        <button onClick={ () => setsubModal(false) } className="float-right"><strong>닫기</strong></button>
                        <div>
                            {modal === null && ctmodal === null ? null : ctmodal && modal ?  <SkillcsstoolExplain />  :  <SkillfrontExplain /> }
                        </div>
                    </div>
                }
                </>
        </div>
    );
}