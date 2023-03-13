import React, {useState} from "react";

function InputText ({marginLeft}) {
    const [text, setText] = useState("");

    const onchange= (e) => {
        setText(e.target.value);
    }

    const onPush = () => {
        setText('');
    }

    return(
        <div style={{marginLeft}}>
            <input onChange={onchange} value={text}/>
            <button onClick={onPush}>reset</button>
            <div>
                <span>:{text}</span>
            </div>
        </div>
    );
}

export default InputText;