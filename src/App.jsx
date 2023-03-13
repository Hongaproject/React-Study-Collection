import Counter from './Counter';
import HelloWorld from './HelloWorld';
import InputText from './InputText';
import UserList1 from './UserList1';
import Wrapper from './Wrapper';

function App() {
  return (  
    <div>
      <Wrapper>
        <HelloWorld name="2일차 입니다." color="aqua" backgroundColor="black" padding="1rem"/>
      </Wrapper>
      <Counter marginLeft="20px"/>
      <br />
      <InputText marginLeft ="20px"/>
      <br />
      <UserList1 marginLeft="20px"/>
    </div>
  );
}
export default App;
