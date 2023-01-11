import React from 'react'
import ReactSlider from 'react-slider'
import SettingsContext from './SettingsContext'
import { useContext } from 'react'
import './slider.css'

export const Settings = () => {
  const settingsInfo = useContext(SettingsContext);
  return (
    <div style={{textAling: 'left'}}>
        <label>Work: {settingsInfo.workMinutes}:00 </label>
        <ReactSlider
            className={'slider'}
            thumbClassName = {'thumb'}
            trackClassName={"track"}
            value={settingsInfo.workMinutes}
            min={1}
            max={120}
        />
        <label>Break: {settingsInfo.breakMinutes}:00 </label>
        <ReactSlider
            className={'slider'}
            thumbClassName = {'thumb'}
            trackClassName={"track"}
            value={settingsInfo.breakMinutes}
            min={1}
            max={120}
        />
    </div>
  )
}
