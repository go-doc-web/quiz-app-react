import { useState, useEffect } from "react";

const QuestionTimer = ({ timeout, onTimeout }) => {
  const [remainingTime, setRemaining] = useState(timeout);

  useEffect(() => {
    // console.log("SETTING TIMEOUT");
    const timoutId = setTimeout(onTimeout, timeout);
    return () => {
      clearTimeout(timoutId);
    };
  }, [timeout, onTimeout]);

  useEffect(() => {
    // console.log("SETTING SETINTERVAL");
    const intervalId = setInterval(() => {
      setRemaining((prevState) => {
        return prevState - 100;
      });
    }, 100);

    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return <progress id="question-time" value={remainingTime} max={timeout} />;
};

export default QuestionTimer;
