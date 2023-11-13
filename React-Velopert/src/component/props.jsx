
// function Props(props) {
//     return (
//         <div style={{color: props.color}}>
//             {/* 이렇게 꺼내서 사용이 가능합니다. */}
//             {props.name}
//         </div>
//     );
//   }

  function Props({name, color}) { // 비구조할당 문법을 사용시 코드가 더 간결하게 작성이 가능합니다.
    return (
        <div style={{color}}>
            {/* 이렇게 꺼내서 사용이 가능합니다. */}
            {name}
        </div>
    );
  }
  
  export default Props;