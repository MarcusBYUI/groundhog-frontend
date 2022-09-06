import React, { useState, useEffect } from "react";

import styles from "./countdownTimer.module.css";

const CountdownTimer = ({ time }) => {
  const [[days, hours, minutes, seconds], setTimer] = useState([0, 0, 0, 0]);

  function calcDayTime(distance) {
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    return [days, hours, minutes, seconds];
  }

  const handleTimer = () => {
    const curTime = new Date().getTime();
    setTimer(calcDayTime(time - curTime));
  };

  useEffect(() => {
    const timeOut = setTimeout(() => {
      handleTimer();
    }, 1000);

    return () => {
      clearTimeout(timeOut);
    };
  });

  return (
    <div className={styles.countdown}>
      <span>{days}d</span>
      <span>:</span>
      <span>{hours}h</span>
      <span>:</span>
      <span>{minutes}m</span>
      <span>:</span>
      <span>{seconds}s</span>
    </div>
  );
};

export default CountdownTimer;
