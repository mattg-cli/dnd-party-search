import CountUp from 'react-countup';
import styles from './StatCircle.module.css';
import VisibilitySensor from 'react-visibility-sensor';

const StatCircle = ({index, title, number}) => {
  return (
    <div className="col-6 text-center">
      <h4 className="mb-2 mt-5 text-uppercase">{title}</h4>
      <div className={`${styles.counterCircle} flex align-items-center justify-content-center`}>
      <CountUp start={0} end={number} separator="," delay={0}>
        {({ countUpRef, start }) => (
          <VisibilitySensor onChange={start} delayedCall>
            <div className="d-flex align-items-center justify-content-center w-100 h-100">
              <p className="mb-1 font-weight-bold" ref={countUpRef}></p>
            </div>
          </VisibilitySensor>
        )}
      </CountUp>
      </div>
    </div>
  );
};

export default StatCircle;