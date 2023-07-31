import React, { useState } from "react";

// const User = () => {
//     return(
//         <div></div>
//     );
// }

//useState는 2개의 value값을 return한다.
function UseState() {

    const [item, setItem] = useState(1); //useState는 초기값 설정이 가능하다. 
    const incrementItem = () => setItem(item + 1);
    const decrementItem = () => setItem(item - 1);

    //useState는 16.8버전 전에는 함수형 컴포넌트서 state를 사용할 수 없었음 
    return(
        <div>
            <h1>{item}</h1>
            <button onClick={incrementItem}>+</button>
            <button onClick={decrementItem}>-</button>
        </div>
    );
}
//class와 function 컴포넌트 비교

class UseStateClass extends React.Component{
    state ={
        item: 1
    }
    render(){
        const {item} = this.state;
        return(
            <div>
                <h1>{item}</h1>
                <button onClick={this.incrementItem}>+</button>
                <button onClick={this.decrementItem}>-</button>
            </div>
        );
    }
    incrementItem = () => {
        this.setState(state => {
            return{
                item: state.item + 1
            };
        });
    };
    decrementItem = () => {
        this.setState(state => {
            return{
                item: state.item - 1
            };
        });
    };
}


export default UseState;