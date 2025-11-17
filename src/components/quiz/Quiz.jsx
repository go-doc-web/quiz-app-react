import { useCallback, useState, useRef } from "react";
import QUESTIONS from "../../data/questionsUkr";
import quizComplited from "../../assets/quiz-complete.png";

import QuestionTimer from "./question-timer/QuestionTimer";

const Quiz = () => {
  const shuffledAnswers = useRef();
  const [userAnswers, setUserAnswers] = useState([]);
  const [anwerState, setAnswerState] = useState("");

  const activeQuestionIndex =
    anwerState === "" ? userAnswers.length : userAnswers.length - 1;

  const handleSelectAnswer = useCallback(
    function handleSelectAnswer(selectedAnswer) {
      setAnswerState("answered");
      setUserAnswers((prevState) => {
        return [...prevState, selectedAnswer];
      });

      let timeoutId = setTimeout(() => {
        if (selectedAnswer === QUESTIONS[activeQuestionIndex].answers[0]) {
          setAnswerState("correct");
        } else {
          setAnswerState("wrong");
        }
        setTimeout(() => {
          setAnswerState("");
        }, 2000);
      }, 1000);
    },
    [activeQuestionIndex]
  );

  const handleSkipAnswer = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer]
  );

  const isQuizCompleted = activeQuestionIndex === QUESTIONS.length;

  if (isQuizCompleted) {
    return (
      <>
        <div id="summary">
          <img src={quizComplited} alt="Quiz Complited" />
          <h2>Quiz Completed</h2>
        </div>
      </>
    );
  }
  if (!shuffledAnswers.current) {
    shuffledAnswers.current = [...QUESTIONS[activeQuestionIndex].answers];
    shuffledAnswers.current.sort(() => Math.random() - 0.5);
  }

  return (
    <div id="quiz">
      <div id="question">
        <QuestionTimer
          key={activeQuestionIndex}
          timeout={10000}
          onTimeout={handleSkipAnswer}
        />
        <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
        <ul id="answers">
          {shuffledAnswers.current.map((answer) => {
            const isSelected = userAnswers[userAnswers.length - 1] === answer;
            let classCss = "";

            if (anwerState === "answered" && isSelected) {
              classCss = "selected";
            }

            if (
              (anwerState === "correct" || anwerState === "wrong") &&
              isSelected
            ) {
              classCss = anwerState;
            }
            return (
              <li key={answer} className="answer">
                <button
                  onClick={() => handleSelectAnswer(answer)}
                  className={classCss}
                >
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
