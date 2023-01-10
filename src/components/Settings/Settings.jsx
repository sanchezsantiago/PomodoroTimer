import React from 'react'
import ReactSlider from 'react-slider'
import './slider.css'

export const Settings = () => {
  return (
    <div style={{textAling: 'left'}}>
        <label>Work minutes: </label>
        <ReactSlider
            className={'slider'}
            trackClassName={"track"}
            value={45}
            min={1}
            max={120}
        />
        <label>Break minutes: </label>
    </div>
  )
}
