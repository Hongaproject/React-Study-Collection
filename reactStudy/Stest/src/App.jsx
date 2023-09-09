import './App.css';
import Main from './Main';
import Sub from './component/Sub';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sub2 from './Sub2';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Main /> 
          <Routes>
            <Route path="/" element={<Sub />}></Route>
            <Route path="/sub2" element={<Sub2 />}></Route>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
