import React from 'react';

function App() {
  
  const [money, setMoney] = useState(0);

  const preventClose = (e) => {  
      e.preventDefault();  
  }

  useEffect(() => { 
      (() => {    
          window.addEventListener("beforeunload", preventClose);  
      })();
          return () => { 
          window.removeEventListener("beforeunload", preventClose);  
      };
  }, []);

  return (  
    <div>
      리액트 useEffect 및 Life Cycle 공부 및 새로고침, 창닫기 경고창 띄우기 공부 중
      <div>
            <h1>{money}</h1>
            <button onClick={()=> setMoney(money+5000)}>+</button>
            <button onClick={()=> setMoney(money-5000)}>-</button>
        </div>
    </div>
  );
}
export default App;
