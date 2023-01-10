import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import React from 'react'

const red = '#f54e4e';
const green = '#4aec8c';

const Timer = () => {
  return (
    <div>
        <CircularProgressbar value={60} text={`60%`} styles={buildStyles({
            rotation:'0',
            strokeLinecap:'round',
            textColor: '#fff',
            pathColor: red,
            trailColor: 'rgba(255,255,255,.2)',
        })} />
    </div>
  )
}

export default Timer