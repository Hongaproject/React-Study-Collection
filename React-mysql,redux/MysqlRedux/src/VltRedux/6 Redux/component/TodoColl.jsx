import React, { useState } from "react";

// 여러 개의 파일 생성한 이유는 리렌더링 성능 최적화를 위해 파일 세분화. 
const TodoItem = React.memo(function TodoItem({}) {

    return(
        <div>

        </div>
    );
});

// 여러 개의 파일 생성한 이유는 리렌더링 성능 최적화를 위해 파일 세분화. 
const TodoList = React.memo(function TodoList({}) {

    return(
        <div>

        </div>
    );
});

function TodoColl ({}) {

    return(
        <div>

        </div>
    );
}

export default TodoColl;