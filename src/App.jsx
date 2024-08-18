import ColorText from "./ESTsoftFE/\bComponents/ColorText";
import Hello from "./ESTsoftFE/\bComponents/Hello";
import Resume from "./ESTsoftFE/\bComponents/Resume";
import Time from "./ESTsoftFE/\bComponents/Time";

export default function App() {
  return (
    <div>
      <Hello name="개리"/>
      <Time />
			<Resume hello="안녕하세요" name="개리" hobby="게임" food="고기" color="blue"/>
      <ColorText color="red"/>
      <ColorText color="green"/>
      <ColorText color="blue"/>
    </div>
  );
}