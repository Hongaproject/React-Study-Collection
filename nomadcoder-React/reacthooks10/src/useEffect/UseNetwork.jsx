import { useEffect } from "react";
import { useState } from "react";

function UseNetwork () {
    // navigator이 online 또는 offline 되는걸 막아줌.

    const useNetwork = onChange => {
        const [state, setState] = useState(navigator.onLine);
        const handleChange = () => {
            if(typeof onChange === "function"){
                onChange(navigator.onLine);
            }
            setState(navigator.onLine);
        }
        useEffect(() => {
            window.addEventListener("online", handleChange);
            window.addEventListener("offline", handleChange);
            () =>{
                window.removeEventListener("online", handleChange);
                window.removeEventListener("offline", handleChange);
            }
        }, []);
        return state;
    }

    const ok = useNetwork();
    return(
        <div>
            <h1>{ok ? "0nline" : "0ffline"}</h1>
        </div>
    );
}

export default UseNetwork;