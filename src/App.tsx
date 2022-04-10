import { useState } from "react";
import Frame from "./components/Frame";
import PowerOn from "./components/PowerOn";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Frame>
        <PowerOn />
      </Frame>
    </div>
  );
}

export default App;
