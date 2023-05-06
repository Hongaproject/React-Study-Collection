import React from "react";

class Counter extends React.Component { 
  // class이지만 React.Component로 확장 후 표시가 됨
  // 무조건 render method 안에 넣어야함 react는 class component의 render method를 실행 시킴.
  // 사용이유 class component가 가진 state를 사용하기 위해 사용한다.
  // state는 object이며 component의 data를 넣고 data는 값이 변한다. 
  state = {
    count: 0
  };

  add = () => {
    // this.setState({count: this.state.count + 1});
    this.setState(current => ({count: current.state.count + 1})); // 이렇게 사용해야 외부의 상태에 의존하지 않는 가장 좋은 방법이다.
  }

  minus = () => {
    // this.setState({count: this.state.count - 1});
    this.setState(current => ({count: current.state.count - 1}));
  }

  render(){
    return(
      <div>
        <h1>class component {this.state.count} </h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}

export default Counter;

// function App() { //function component는 function -> return해서 표시가 됨
//   return(
//     <div>
//       <h1>function component</h1>
//     </div>
//   );
// }

// export default App;