import React, { useState } from "react";

// 여러 개의 파일 생성한 이유는 리렌더링 성능 최적화를 위해 파일 세분화. 
// 컴포넌트 최적화를 위하여 React.memo를 사용합니다. 
const TodoItem = React.memo(function TodoItem({todo, onToggle}) {

    return(
        <li style={{ textDecoration: todo.done ? 'line-through' : 'none' }} onClick={() => onToggle(todo.id)}>
            {todo.text}
        </li>
    );
});

// 여러 개의 파일 생성한 이유는 리렌더링 성능 최적화를 위해 파일 세분화. 
// 컴포넌트 최적화를 위하여 React.memo를 사용합니다. 
const TodoList = React.memo(function TodoList({todos, onToggle}) {

    return(
        <ul>
            {
                todos.map((todo) => (
                    <TodoItem key={todo.key} todo={todo} onToggle={onToggle} />
            ))}
        </ul>
    );
});

function TodoColl ({todos, onCreate, onToggle}) { // 컨테이너 부분에서 넘겨주는 중

    // 이 부분은 할 일을 입력하게 하는 컴포넌트이다.
    const [text, setText] = useState('');
    
    const onChange = (e) => {
        setText(e.target.value);
    };
    const onSubmit = (e) => {
        e.preventDefault();
        onCreate(text);
        setText('');
    };

    return(
        <div>
            <form onSubmit={onSubmit}>
                <input type="text" value={text} placeholder="할 일을 입력하세요." onChange={onChange} />
            </form>
            <TodoList todos={todos} onToggle={onToggle} />
        </div>
    );
}

export default TodoColl;