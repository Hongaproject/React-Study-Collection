import dafaultAxios from "axios";
import { useEffect, useState } from "react";

// axios client 얻어옴 
const UseAxios = (opts, axiosInstance = dafaultAxios) => { // axios를 얻어서 전달한다.

    const [ state, setState] = useState({ // state안에 object만들어줌
        loading: true,
        error: null, 
        data: null
    });


    if(!opts.url){
        return;
    }
    
    return state;
} 
// instance를 가지고 있지 않다면 dafaultAxios를 기본값으로 세팅 

export default UseAxios;