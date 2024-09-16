// Enum
// Enum(열거형)은 TypeScript에서 상수 값들의 집합을 정의할 때 사용하는 특별한 자료형입니다. 
// 열거형을 사용하면 코드에서 의미 있는 이름을 사용해 가독성을 높이고, 실수를 줄일 수 있습니다. 
// Enum은 숫자형(Numeric Enums)과 문자열형(String Enums)의 두 가지 형태로 사용할 수 있습니다.

// 숫자형 Enum
// 숫자형 `Enum`은 기본적으로 첫 번째 값이 `0`부터 시작하고, 이후 값들이 1씩 증가합니다. 원하는 숫자로 값을 설정할 수도 있습니다.

enum Direction {
  Up,    // 0
  Down,  // 1
  Left,  // 2
  Right  // 3
}

let move: Direction = Direction.Up;  // move = 0

// 숫자를 명시적으로 할당할 수도 있습니다.
enum Direction {
    Up = 1,    // 1
    Down,      // 2
    Left = 10, // 10
    Right      // 11
  }
  
let move: Direction = Direction.Left;  // move = 10

// 예시
enum Direction {
    Up , 
    Down,   
    Left, 
    Right 
  }
  
  function movePlayer(direction: Direction) {
    switch (direction) {
      case Direction.Up:
        console.log("Moving Up");
        break;
      case Direction.Down:
        console.log("Moving Down");
        break;
      case Direction.Left:
        console.log("Moving Left");
        break;
      case Direction.Right:
        console.log("Moving Right");
        break;
    }
  }
  
  movePlayer(Direction.Up);  // "Moving Up"
  
// 문자열형 `Enum`은 값이 문자열로 지정됩니다. 이 경우 자동으로 값이 증가하지 않으며, 각 값을 명시적으로 지정해야 합니다.
enum Status {
    Success = "SUCCESS",
    Error = "ERROR",
    Loading = "LOADING"
  }
  
let currentStatus: Status = Status.Success;

// 예시
function displayStatus(status: Status) {
    if (status === Status.Success) {
      console.log("Operation was successful!");
    } else if (status === Status.Error) {
      console.log("There was an error.");
    } else if (status === Status.Loading) {
      console.log("Loading...");
    }
}
  
displayStatus(Status.Loading);  // "Loading..."
  