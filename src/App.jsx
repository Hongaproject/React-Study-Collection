import Counter from './Counter';
import HelloWorld from './HelloWorld';
import Wrapper from './Wrapper';

function App() {
  return (  
    <div>
      <Wrapper>
        <HelloWorld name="2일차 입니다." color="aqua" backgroundColor="black" padding="1rem"/>
      </Wrapper>
      <Counter/>
    </div>
  );
}
export default App;
