import { useState, useEffect } from "react";
import Header from "./components/Header";
import classes from "./App.module.css";
import Timer from "./components/Timer";
import { useSelector } from "react-redux";
import clsx from "clsx";
import Loading from "./components/Loading";

function App() {
  const mode = useSelector((state) => state.timer.mode);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Show loading screen for 2 seconds

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className={clsx(classes.container, classes[mode])}>
      <Header />
      <div className={classes.content}>
        <Timer />
      </div>
    </div>
  );
}

export default App;
