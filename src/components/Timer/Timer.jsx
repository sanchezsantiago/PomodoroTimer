import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import React from 'react'
import PlayButton from './PlayButton';
import PauseButton from './PauseButton';
import SettingsButton from './SettingsButton';
import { useContext, useState } from 'react';
import SettingsContext from '../Settings/SettingsContext';
const red = '#f54e4e';
//const green = '#4aec8c';

const Timer = () => {
  const settingsInfo = useContext(SettingsContext);
  const [isPaused, setIsPaused] = useState(true)
  return (
    <div>
        <CircularProgressbar value={60} text={`60%`} styles={buildStyles({
            rotation:'0',
            strokeLinecap:'round',
            textColor: '#fff',
            pathColor: red,
            trailColor: 'rgba(255,255,255,.2)',
        })} />
        <div style={{marginTop:'20px'}}>
          {isPaused? <PlayButton/> : <PauseButton/>}
        </div>
        <div style={{marginTop:'20px'}}>
            <SettingsButton onClick={()=> settingsInfo.setShowSettings(true)}/>
        </div>
    </div>
  )
}

export default Timer