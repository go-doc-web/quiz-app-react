import React, { useState, useEffect } from "react";

import QUESTIONS from "../../data/questionsUkr";

const items = QUESTIONS;

const Quiz = () => {
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex = userAnswers.length;

  const handleAnswerButton = (selectedAnswer) => {
    setUserAnswers((prevState) => {
      return [...prevState, selectedAnswer];
    });
  };

  return (
    <div id="quiz">
      <div id="question">
        <h2>{items[activeQuestionIndex].text}</h2>
        <ul id="answers">
          {items[activeQuestionIndex].answers.map((answer) => {
            return (
              <li key={answer} className="answer">
                <button onClick={() => handleAnswerButton(answer)}>
                  {answer}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Quiz;
