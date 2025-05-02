import { useEffect, useState } from 'react';
import classes from './Loading.module.css';
import logo from '../assets/logo.png';

export default function Loading() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prevProgress + 1;
      });
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={classes.loadingContainer}>
      <div className={classes.progressContainer}>
        <svg className={classes.progressCircle} viewBox="0 0 100 100">
          <circle
            className={classes.progressCircleBackground}
            cx="50"
            cy="50"
            r="45"
          />
          <circle
            className={classes.progressCirclePath}
            cx="50"
            cy="50"
            r="45"
            style={{
              strokeDasharray: `${progress * 2.827}, 282.7`,
            }}
          />
        </svg>
        <div className={classes.title}>FocusSpirit</div>
      </div>
      <div className={classes.progressText}>{progress}%</div>
    </div>
  );
} 