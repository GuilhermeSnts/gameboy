import { useState } from "react";
import Frame from "./components/Frame";
import PowerOn from "./components/PowerOn";
import Phones from "./components/Phones";
import Sound from "./components/Sound";
import Screen from "./components/Screen";
import Controls from "./components/Controls";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Frame variant="offWhite">
        <PowerOn variant="offWhite" />
        <Screen variant="offWhite" />
        <Controls variant="offWhite" />
        <Sound variant="offWhite" />
        <Phones variant="offWhite" />
      </Frame>
    </div>
  );
}

export default App;
