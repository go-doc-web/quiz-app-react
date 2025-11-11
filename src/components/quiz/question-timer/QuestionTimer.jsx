import { useState, useEffect } from "react";

const QuestionTimer = ({ timeout, onTimeout }) => {
  const [remainingTime, setRemaining] = useState(timeout);

  useEffect(() => {
    console.log("SETTING TIMEOUT");
    setTimeout(onTimeout, timeout);
  }, [timeout, onTimeout]);

  useEffect(() => {
    console.log("SETTING SETINTERVAL");
    setInterval(() => {
      setRemaining((prevState) => {
        return prevState - 100;
      });
    }, 100);
  }, []);
  return <progress id="question-time" value={remainingTime} max={timeout} />;
};

export default QuestionTimer;
