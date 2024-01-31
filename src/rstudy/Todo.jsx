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
            <TodoCreate />
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

function TodoCreate() {

    return(
        <div>
            <input type="text" placeholder="할 일을 입력해주세요." />
            <button>등록</button>
        </div>
    );
}

export default Todo;