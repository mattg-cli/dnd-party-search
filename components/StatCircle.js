import React, { useRef } from "react";
import { useCountUp } from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import styles from './StatCircle.module.css';

const StatCircle = ({ index, title, number }) => {

  // using a ref since we don't need a state change to re-render
  // useRef will keep the reference on every render/update
  // a normal variable will be erased and re-assigned at every component re-render
  const triggeredRef = useRef(false);
  const { countUp, start } = useCountUp({
    start: 0,
    end: number,
    separator: ',',
    delay: 100,
    duration: 2
  });

  const onChange = (isVisible) => {
    // confirm the VisibilitySensor is visible
    // and that our triggeredRef is false for the first scroll-thru
    if (isVisible && !triggeredRef.current) {
      // re-assign to tell future scroll-by's to fuck off
      triggeredRef.current = true;
      // this start actually does START and not bullshit reset
      start();
    }
  };

  return (
    <div className="col-6 text-center">
      <h5 className="mb-2 mt-5 text-uppercase">{title}</h5>
      <div className={`${styles.counterCircle} flex align-items-center justify-content-center`}>
        <VisibilitySensor onChange={onChange}>
          <div className="d-flex align-items-center justify-content-center w-100 h-100">
            <p className="mb-1 font-weight-bold">{countUp}</p>
          </div>
        </VisibilitySensor>
      </div>
    </div>
  );
};

export default StatCircle;