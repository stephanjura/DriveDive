import React, { useState, useEffect } from 'react';
import './countdown.scss';

const Countdown = (props) => {
  const [countdownDate, setCountdownDate] = useState(
    new Date(props.dateTime).getTime()
  );
  const [state, setState] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    setInterval(() => setNewTime(), 1000);
  }, []);

  const setNewTime = () => {
    if (countdownDate) {
      const currentTime = new Date().getTime();
      const distanceToDate = countdownDate - currentTime;

      let days = Math.floor(distanceToDate / (1000 * 60 * 60 * 24));
      let hours = Math.floor(
        (distanceToDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );

      let minutes = Math.floor(
        (distanceToDate % (1000 * 60 * 60)) / (1000 * 60)
      );

      let seconds = Math.floor((distanceToDate % (1000 * 60)) / 1000);
      const numbersToAddZeroTo = [1, 2, 3, 4, 5, 6, 7, 8, 9];

      days = `${days}`;
      if (numbersToAddZeroTo.includes(hours)) {
        hours = `0${hours}`;
      } else if (numbersToAddZeroTo.includes(minutes)) {
        minutes = `0${minutes}`;
      } else if (numbersToAddZeroTo.includes(seconds)) {
        seconds = `0${seconds}`;
      }

      setState({ days: days, hours: hours, minutes, seconds });
    }
  };

  return (
    <>
      <div className={`countdown-wrapper ${props.size || ''}`}>
        <div className="time-section">
          <small className="time-text">Days</small>
          <div className="time">{state.days || '0'}</div>
        </div>
        <div className="time-section">
          <small className="time-text">Hours</small>
          <div className="time">{state.hours || '00'}</div>
        </div>
        <div className="time-section">
          <small className="time-text">Minutes</small>
          <div className="time">{state.minutes || '00'}</div>
        </div>
        <div className="time-section">
          <small className="time-text">Seconds</small>
          <div className="time">{state.seconds || '00'}</div>
        </div>
      </div>
    </>
  );
};

export default Countdown;
