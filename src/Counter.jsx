import React, {useState} from "react";

function Counter ({marginLeft}) {

    const [number, setNumber] = useState(0);
    const onIncrease = () => {
        setNumber(number+1);
    }

    return(
        <div style={{marginLeft}}>
            <h1>{number}</h1>
            <button onClick={onIncrease}>+</button>
            <button onClick={()=> setNumber(number-1)}>-</button>
        </div>
    );
}

export default Counter;