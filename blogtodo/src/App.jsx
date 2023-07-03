import { useEffect, useState } from 'react';
import './App.css';
import HelloWorld from './basic/HelloWorld';

  

function App() {

  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  },[]);

  return (
    <div>
      <HelloWorld />
      {isLoading ? 'Loading...' : 'I am ready'}
    </div>
  );
}

export default App;
