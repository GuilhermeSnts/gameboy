import { useState } from "react";
import Frame from "./components/Frame";
import PowerOn from "./components/PowerOn";
import Phones from "./components/Phones";
import Sound from "./components/Sound";
import Screen from "./components/Screen";
import Controls from "./components/Controls";
import Logo from "./components/Logo";
import { Status } from './types';

function App() {
  const [status, setStatus] = useState<Status>('off');

  const handlePowerSwitch = () => {
    setStatus(status === 'on' ? 'off' : 'on')
  }

  return (
    <div className="App">
      <Frame variant="offWhite">
        <PowerOn
          variant="offWhite"
          status={status}
          onClick={handlePowerSwitch}
        />
        <Screen variant="offWhite" status={status} />
        <Logo variant="offWhite" />
        <Controls variant="offWhite" />
        <Sound variant="offWhite" />
        <Phones variant="offWhite" />
      </Frame>
    </div>
  );
}

export default App;
