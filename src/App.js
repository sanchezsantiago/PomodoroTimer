import './App.css';
import { Settings } from './components/Settings/Settings';
import Timer from './components/Timer/Timer';
import {useState} from 'react';
import SettingsContext from './components/Settings/SettingsContext';

function App() {
  const [showSettings, setShowSettings] = useState(true);
  return (
    <main>
      <SettingsContext.Provider value={{
        workMinutes: 45,
        breakMinutes: 15,
      }}>

        {showSettings? <Settings/> : <Timer/> }

      </SettingsContext.Provider>
    </main>
  );
}

export default App;
