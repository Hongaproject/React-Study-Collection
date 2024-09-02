import ColorText from "./ESTsoftFE/081314/ColorText";
import Hello from "./ESTsoftFE/081314/Hello";
import Resume from "./ESTsoftFE/081314/Resume";
import Time from "./ESTsoftFE/081314/Time";
import Feelings from "./ESTsoftFE/0819/feelList/Feelings";
import Resume2 from "./ESTsoftFE/0819/Resume2";
import AnimalApp from "./ESTsoftFE/0820/AnimalApp";
import UserApp from "./ESTsoftFE/0820/UserApp";
import RouterApp from "./ESTsoftFE/0821/RouterApp";
import StyledC from "./ESTsoftFE/0822/StyledC";
import "./App.css";
import UseState from "./ESTsoftFE/Study/UseState";
import Router from "./ESTsoftFE/Study/Router";
import UseEffect from "./ESTsoftFE/Study/UseEffect";
import UseRef from "./ESTsoftFE/Study/UseRef";
import UseMemo from "./ESTsoftFE/Study/UseMemo";

export default function App() {
  return (
    <div>
      {/* <Resume2 hello="안녕하세요" name="개리" hobby="게임" food="고기" color="blue"/>
      <Feelings />
      <UserApp />
      <AnimalApp />
      <RouterApp />
      <StyledC />
      <div className="f">
        <div>안녕하세요.</div>
      </div> */}
      {/* <Study1 />
      <Hello name="개리"/>
      <Time />
			<Resume hello="안녕하세요" name="개리" hobby="게임" food="고기" color="blue"/>
      <ColorText color="red"/>
      <ColorText color="green"/>
      <ColorText color="blue"/> */}
      {/* <UseState />
      <Router />
      <UseEffect />
      <UseRef /> */}
      <UseMemo />
    </div>
  );
}