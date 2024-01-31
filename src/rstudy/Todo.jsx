import { useState } from "react";

function Todo () {
    // 기능 구현을 위주로 하려고 하며 정보를 찾지 않고 혼자만의 힘으로 제작한다.
    // CRUD를 넣은 투두리스트 제작

    const [todo, setTodo] = useState([
        {
            id: 1,
            title: '할일1'
        },
        {
            id: 2,
            title: '할일2'
        }
    ])

    return(
        <div>
            <h1>투두리스트</h1>
            <TodoCreate setTodo={setTodo} todo={todo} />
            {
                todo.map((item) => (
                    <div>
                        <TodoItem id={item.id} title={item.title} setTodo={setTodo} />
                    </div>
                ))
            }
        </div>
    );
}

function TodoItem({id, title, setTodo}) {
    
    return(
        <div>
            <h3>{title}</h3>
            <button>수정</button>
            <button>삭제</button>
        </div>
    );
}

function TodoCreate({setTodo, todo}) {

    const [text, setText] = useState(""); 

    const onChange = (e) => { // input작성시 이벤트를 활성 시키기 위해 사용함.
        setText(e.target.value);
    }

    const onSubmit = (e) => { // 내용을 전송하기 위해 사용을 함
        e.preventDefault(); // 이벤트 새로고침 방지
        const newTodo = { // 새로운 객체를 생성
            id: Date.now(),
            title: text
        }
        setTodo([...todo, newTodo]); // spread문법을 사용해서 전에 있던 todo내용을 복사해오고 그 뒤에 newTodo 내용을 넣어준다.
        setText(""); // 내용을 전달하고 초기화 시키기 
    }

    return(
        <div>
            <form onSubmit={onSubmit}>
                <input type="text" placeholder="할 일을 입력해주세요." onChange={onChange} value={text}/>
                <button>등록</button>
            </form>
        </div>
    );
}

export default Todo;