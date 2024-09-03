
// LifeCycle? -> 생명주기라고 불리고 컴포넌트가 생성 - 업데이트 - 제거 과정에서 실행되는 메서드가 있습니다. 
// 마운트 -> 처음 컴포넌트가 생겼을때 나타나는 단계 
// 업데이트 -> 컴포넌트에 변화가 있을때 발생하는 단계입니다. -> state나 props값이 변경되었을 때
// 언마운트 -> 컴포넌트가 제거될때 나타나는 단계

// 마운트 -> 처음에 state나 props를 가지고 컴포넌트를 생성합니다.
// - `constructor` - `getDerivedStateFromProps` - `render` - `componentDidMount` 순으로 진행됩니다.

// 업데이트 -> state나 props값이 변경될 때, 부모 컴포넌트다 리렌더링 될 때
// - `getDerivedStateFromProps` - `shouldComponentUpdate` - `render` - `componentWillUpdate` - `componentDidUpdate` 순으로 진행됩니다.

// 언마운트 -> 제거될 때
// componentWillUnmount : 컴포넌트가 사라지기 바로 직전에 호출됩니다. 

import React, { Component } from "react";

class ClassComp extends Component {
  constructor(props) {
    super(props);
    this.state = { number: 0 };
  }

  componentWillMount() {
		//컴포넌트가 생성될 때 실행됩니다. (렌더링 되기 이전)
    console.log("componentWillMount");
  }

  componentDidMount() {
	//마운트가 완료되고 나서 실행됩니다. (렌더링 이후) 
    console.log("componentDidMount");
  }

  shouldComponentUpdate(nextProps, nextState) {
		//상태 업데이트가 되고 컴포넌트가 업데이트 되기 전(렌더되기 전) 실행됩니다.
		//초기 렌더링에서 발생하지 않습니다.
    console.log("shouldComponentUpdate");
    return true;
  }

  componentWillUpdate(nextProps, nextState) {
		//UNSAFE_componentWillUpdate()로 변경됨, 17버전까지는 사용 가능합니다.
		//초기 렌더링에서 발생하지 않고, 그 이후 업데이트가 되고 나서 발생합니다.
    console.log("componetWillUpdate");
  }

  componentDidUpdate(nextProps, nextState) {
		//업데이트가 되고 나서 실행됩니다.
    console.log("componentDidUpdate");
  }

	componentWillUnmount() {
   //컴포넌트가 제거되기 바로 직전에 실행됩니다.
    console.log("componentWillUnmount");
  }
  

  handleClick = () => {
    this.setState((state) => {
      return {
        number: state.number + 1,
      };
    });
  };

  render() {
    console.log("render");
    return (
      <div>
        <button onClick={this.handleClick}>Click me!</button>
        <span>{this.state.number}</span>
      </div>
    );
  }
}

export default class LifeCycle extends Component {
  render() {
    return <ClassComp />;
  }
}
