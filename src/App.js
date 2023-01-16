import './App.css';
import { Settings } from './components/Settings/Settings';
import Timer from './components/Timer/Timer';
import {useState} from 'react';
import SettingsContext from './components/Settings/SettingsContext';

function App() {
  const [showSettings, setShowSettings] = useState(false);
  const [workMinutes, setWorkMinutes] = useState(45)
  const [breakMinutes, setBreakMinutes] = useState(15)
  return (
    <main>
      <SettingsContext.Provider value={{
        showSettings,
        setShowSettings,
        workMinutes,
        breakMinutes,
        setWorkMinutes,
        setBreakMinutes
      }}>

        {showSettings? <Settings/> : <Timer/> }

      </SettingsContext.Provider>
      <footer>By SanchezSantiago</footer>
    </main>
  );
}

export default App;
