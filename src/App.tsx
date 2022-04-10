import { useState } from "react";
import Frame from "./components/Frame";
import PowerOn from "./components/PowerOn";
import Phones from "./components/Phones";
import Sound from "./components/Sound";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Frame variant="offWhite">
        <PowerOn variant="offWhite" />
        <Sound variant="offWhite" />
        <Phones variant="offWhite" />
      </Frame>
    </div>
  );
}

export default App;
