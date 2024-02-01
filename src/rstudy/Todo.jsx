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
            <TodoCreate todo={todo} setTodo={setTodo} />
            {
                todo.map((item) => (
                    <div>
                        <TodoItem todo={todo} setTodo={setTodo} id={item.id} title={item.title} />
                    </div>
                ))
            }
        </div>
    );
}

function TodoItem({todo, setTodo, id, title}) {
  
    const onDelete = (id) => { // 삭제를 하기 위해 filter를 사용하여 id를 넣음
        setTodo(todo.filter((item) => item.id !== id));
    }


    return(
       <div>
            <h3>{title}</h3>
            <button>수정</button>
            <button onClick={() => onDelete(id)}>삭제</button>
       </div>
    );
}

function TodoCreate({todo, setTodo}) {

    const [text, setText] = useState(""); 

    const onChange = (e) => { // input 이벤트를 사용
        setText(e.target.value);
    }

    const onSubmit = (e) => { // 내용 전달해줄때 사용
        e.preventDefault(); // 새로고침 방지
        const newTodo = { // 이미 있는 객체에 새로운 객체를 넣어주기 위해 사용
            id: Date.now(),
            title: text
        }
        setTodo([...todo, newTodo]); // spread를 사용하여 기존 객체 복사해오고 그 뒤에 새로운 newTodo라는 객체를 생성해준다.
        setText(""); // 전달 후 초기화 되게 함.
    } 

    return(
        <div>
            <form onSubmit={onSubmit}>
                <input type="text" placeholder="할 일을 입력하세요." onChange={onChange} value={text} />
                <button>등록</button>
            </form>
        </div>
    );
}

export default Todo;