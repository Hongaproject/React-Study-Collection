// 함수로 사용하기 -> function 함수명(파라미터:타입): 리턴타입 {} 
function add(firstNum, secondNum) {
    return firstNum + secondNum;
    // 이렇게 코드를 작성하면 모든 타입이 any로 나타난다. 
}

function add1(firstNum:number, secondNum:number):number {
    return firstNum + secondNum;
}

// 선택적 매개변수 noImplicitReturns 사용하기

// void - 반환값이 없는 경우
function add2(firstNum, secondNum) {
    console.log(firstNum + secondNum);
    // 결과 값은 undefined를 반환합니다. 
}

function add3(firstNum:string, secondNum:string):void {
    console.log(firstNum + secondNum); 
    // 반환을 무시합니다. undefined는 값이고 void는 어떠한 값도 아닙니다.
    // JS에서는 undefined를 TS에서는 void를 사용한다.
}

// never - 함수가 절대로 끝나지 않는 경우
// 항상 예외를 던지는 함수: 이 함수는 정상적으로 끝나지 않고 오류를 던집니다.
// 무한 루프를 도는 함수: 이 함수는 영원히 실행되기 때문에 종료되지 않습니다.

function throwError(message: string): never { // 이 함수는 never 타입을 반환하며, 예외를 던지기 때문에 정상적으로 값을 반환하지 않습니다.
    throw new Error(message);
    }

throwError("Something went wrong!");  // 예외가 발생하고 함수는 종료되지 않음

function infiniteLoop(): never { // 이 함수도 never 타입을 반환합니다. 종료되지 않고 계속해서 실행되기 때문에 반환값이 없으며, never 타입이 적합합니다.
    while (true) {
        console.log("This will run forever!");
    }
}

infiniteLoop();  // 이 함수는 종료되지 않고 무한히 실행됨

// void: 함수가 정상적으로 종료되지만 반환값이 없는 경우.
// never: 함수가 정상적으로 종료되지 않는 경우. (예: 오류 발생, 무한 루프)

// 타입스크립트는 {} 구문을 통해 객체를 생성하면 새로운 타입을 고려합니다.
let obj:{
    key:string
}