import React from "react";

function Study({name, color}) {
    return(
        <div>
            <h1 style={color}> {name}사용중입니다.</h1>
            <h3>레고조각처럼 조각조각 맞추어서 사용한다. 컴포넌트를 사용하면 유지보수가 용이하고 캡슐화, 재사용성, 결합성이 좋다.</h3>
        </div>
    );
}

Study.defaultProps = {
    name: '이름없음'
  }
  
export default Study;