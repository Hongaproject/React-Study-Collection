function Wrapper(props) {
    const style = {
      border: '2px solid black',
      padding: '16px',
    };
    return (
      <div style={style}>
        {props.children}
      </div>
    )
  }

  //쓰임 당하는 곳(Wrapper.js)에서 값을 정한다 = children

  function Wrapper({children}) {
    const style = {
      border: '2px solid black',
      padding: '16px',
    };
    return (
      <div style={style}>
        {children}
      </div>
    )
  }
  
  export default Wrapper;