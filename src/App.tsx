import { useState } from "react";
import Frame from "./components/Frame";
import PowerOn from "./components/PowerOn";
import Phones from "./components/Phones";
import Sound from "./components/Sound";
import Screen from "./components/Screen";
import Controls from "./components/Controls";
import { Status } from './types';

function App() {
  const [status, setStatus] = useState<Status>('on');

  return (
    <div className="App">
      <Frame variant="offWhite">
        <PowerOn variant="offWhite" status={status} />
        <Screen variant="offWhite" status={status} />
        <Controls variant="offWhite" />
        <Sound variant="offWhite" />
        <Phones variant="offWhite" />
      </Frame>
    </div>
  );
}

export default App;
