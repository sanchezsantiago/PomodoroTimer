import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import React from 'react'
import PlayButton from './PlayButton';
import PauseButton from './PauseButton';
import SettingsButton from './SettingsButton';
import { useContext, useState, useEffect, useRef } from 'react';
import SettingsContext from '../Settings/SettingsContext';
const red = '#f54e4e';
//const green = '#4aec8c';

const Timer = () => {
  const settingsInfo = useContext(SettingsContext);
  const [isPaused, setIsPaused] = useState(true);
  const [secondsLeft, setSecondsLeft] = useState(0)
  const [mode, setMode] = useState('Work');
  
  const secondsLeftRef = useRef(secondsLeft);
  const isPausedRef = useRef(isPaused);
  const modeRef = useRef(mode);


  function initTimer() {
    setSecondsLeft(settingsInfo.workMinutes * 60);
  }
  function switchMode() {
    const nextMode = modeRef.current === 'work' ? 'break' : 'work';
    const nextSeconds =  (nextMode === 'work'? settingsInfo.workMinutes : settingsInfo.breakMinutes) * 60;
    setMode(nextMode);
    setSecondsLeft(nextSeconds);
    secondsLeftRef.current = nextSeconds;
  }
  function tick() {
    secondsLeftRef.current--;
    setSecondsLeft(secondsLeftRef.current);
  }

  useEffect(()=>{
    initTimer();

    const interval = setInterval(()=>{
      if(isPausedRef.current){
        return;
      }
      if(secondsLeftRef.current === 0){
        return switchMode();
      }
      tick();
    }, 1000)
    return clearInterval(interval);
  },[settingsInfo])

  const totalSeconds = mode === 'work' ? 
    settingsInfo.workMinutes * 60 
    : settingsInfo.breakMinutes * 60;

  const porcentage = Math.round(secondsLeft / totalSeconds) * 100;
  const minutes = Math.floor(secondsLeft / 60);
  let seconds = secondsLeft % 60;
  if(seconds < 10) seconds = '0'+ seconds;
  return (
    <div>
        <CircularProgressbar value={porcentage} text={minutes + ':' + seconds} styles={buildStyles({
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