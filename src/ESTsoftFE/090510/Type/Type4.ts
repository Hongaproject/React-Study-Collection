// 제네릭 -> 재사용성과 타입 안전성을 높여주는 역할을 한다. 다양한 타입을 처리 가능한 함수, 클래스, 인터페이스 등을 제작 가능하고 코드의 유연성을 크게 향상시킨다.
// 사용시점 -> 코드를 호출하는 시점까지 타입을 모르는 경우에 사용한다.

//생성자 함수를 사용하여 배열 생성.
const a = new Array<number>(1,2,3) // Array뒤에 <number> 라는 것이 붙어있는데요 이 문법이 제네릭을 사용하는 문법

function add(a:number, b:number){
	return a + b; // a와 b는 함수를 호출하기 전까지는 아직 값이 정해지지 않은 상태입니다.
}

add(3, 4) // 이렇게 호출할 때 a는 3으로, b는 4로 값이 정해집니다.

// 사용할 때 타입이 정해지도록 하는 방식.

function identity<T>(value: T): T { // T는 타입 파라미터로, 함수가 호출될 때 실제 타입이 결정됩니다.
    return value;
}

console.log(identity<string>("Hello"));  // "Hello"
console.log(identity<number>(42));       // 42

// 이 함수는 전달받은 타입에 따라 string이나 number를 처리할 수 있으며, 반환 타입도 동일하게 유지됩니다.

// 제네릭을 사용하는 상황:
// 배열, 리스트와 같은 자료구조를 만들 때, 다양한 타입의 데이터를 처리하는 함수나 클래스에 유용합니다.
// 여러 타입의 객체를 처리해야 하지만, 타입 안전성을 보장하고 싶을 때.

// 제네릭을 사용할 수 있는 곳:
// 함수: 위 예제처럼 함수의 매개변수와 반환 타입에 제네릭을 적용.
// 클래스: 객체의 속성과 메서드에 제네릭을 적용.
// 인터페이스: 다양한 타입을 처리할 수 있는 인터페이스 정의.

// 클래스 예시
class Box<T> {
    contents: T;
  
    constructor(contents: T) {
      this.contents = contents;
    }
  
    getContents(): T {
      return this.contents;
    }
  }
  
  const stringBox = new Box<string>("Hello");
  console.log(stringBox.getContents());  // "Hello"
  
  const numberBox = new Box<number>(42);
  console.log(numberBox.getContents());  // 42

// 인터페이스 예시
// 제네릭 인터페이스 정의
interface KeyValuePair<K, V> {
    key: K;
    value: V;
  }
  
  // 제네릭 인터페이스를 사용한 객체
  const stringNumberPair: KeyValuePair<string, number> = {
    key: "age",
    value: 30
  };
  
  const numberBooleanPair: KeyValuePair<number, boolean> = {
    key: 1,
    value: true
  };
  
  console.log(stringNumberPair);  // { key: "age", value: 30 }
  console.log(numberBooleanPair); // { key: 1, value: true }
  
