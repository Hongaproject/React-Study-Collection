import { useState } from "react";
import DisplayFeelings from "./DisplayFeeling";
import FeelingList from "./FeelingList";

export default function Feelings () {

    const [current, setCurrent] = useState("");

    return(
        <>
            <h1>오늘의 기분을 선택해주세요 😄</h1>
            <FeelingList onItemClick={setCurrent} current={current}/>
            <DisplayFeelings current={current} />
        </>
    );
}