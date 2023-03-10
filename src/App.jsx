import './App.css';
import HelloWorld from './HelloWorld';

function App() {

  const text = "1일차 입니다."
  const style = {
    backgroundColor: 'black',
    color: '#fff',
    padding: '20px'
  }
  return (  
    <div>
      <HelloWorld/>
      <div style={style}>{text}</div>
      <div className='box'></div>
    </div>
  );
}

export default App;
