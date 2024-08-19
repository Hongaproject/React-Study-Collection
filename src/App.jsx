import ColorText from "./ESTsoftFE/Components/ColorText";
import Hello from "./ESTsoftFE/Components/Hello";
import Resume from "./ESTsoftFE/Components/Resume";
import Time from "./ESTsoftFE/Components/Time";
import Study1 from "./ESTsoftFE/Study1";

export default function App() {
  return (
    <div>
      <Study1 />
      <Hello name="개리"/>
      <Time />
			<Resume hello="안녕하세요" name="개리" hobby="게임" food="고기" color="blue"/>
      <ColorText color="red"/>
      <ColorText color="green"/>
      <ColorText color="blue"/>
    </div>
  );
}