// type키워드
let todoData:{
	key:string; 
	todo:string;
}
function addTodo(newTodoData:{key:string,todo:string}){
	//엄청난 코드
}
function editTodo(prevTodo:{key:string,todo:string}):{key:string,todo:string}{
	//엄청난 코드
	return editedTodo
}

// key와 todo라는 속성을 가지고있는 타입에 Todo라는 이름을 부여
type Todo = {
	key:string;
	todo:string;
}
// 기존에 만들어둔 Todo라는 타입 사용하기
function addTodo(newTodoData:Todo){
	//엄청난 코드
}
function editTodo(prevTodo:Todo):Todo{
	//엄청난 코드
	return editedTodo
}

// 확장법 -> 인터섹션 타입 &기호 사용 여러 타입의 조건을 모두 충족하는 타입을 만들어 사용 가능합니다.
type Character = {
	nickName:string;
}
type Rabbit = {
	jump:number;
}
type Bird = {
	fly:number;
}
type RabbitChracter = Character&Rabbit
type BirdChracter = Character&Bird

const rabbit:RabbitChracter = {
    nickName:"rabbit",
    jump:10
}
// 혹은 이렇게도 사용 가능.
type Character = {
	nickName:string;
}
type BirdCharacter = { fly:number } & Character

// 읽기전용 속성
// type에서 속성을 읽기전용으로만 사용하도록 명시할 수 있습니다.
// 읽기전용으로 명시한 속성은 const로 선언한 변수처럼 읽기만 가능하고 변경이 불가능합니다.
type Character = {
	nickName:string;
	readonly id:number
}

// interface 키워드
// 객체를 정의 하기 위해 interface 키워드를 사용할 수 있습니다.
// interface는 type과 비슷하게 사용되지만 여러가지 기능을 사용할 수 있습니다.
interface user {
	id:number;
	name:string;
	info:string;
}

// 확장법 type과 다르게 extends을 사용해서 확장이 가능하다.
//type Character = {
//	nickName:string;
//}
//type BirdCharacter = { fly:number } & Character

interface Character {
	nickName:string;
}
interface BirdCharacter extends Character { 
	fly:number;
}

// 병합도 가능합니다.
interface Character {
	nickName:string;
}
interface Character {
	level:number;
}

const char:Character{
	nickName:string,
	level:number
}

// 타입과 인터페이스 차이점
// 1. 사용 법의 차이 - 객체 구조 정의? 아니면 복작한 타입 조합
// 2. 확장법 차이 - &과 extends
// 3. 병합여부 - type은 병합불가 interface 병합 가능