import { useState } from "react";
import QUESTIONS from "../../data/questionsUkr";
import quizComplited from "../../assets/quiz-complete.png";

const Quiz = () => {
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex = userAnswers.length;

  const handleAnswerButton = (selectedAnswer) => {
    setUserAnswers((prevState) => {
      return [...prevState, selectedAnswer];
    });
  };

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
  const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers];
  shuffledAnswers.sort(() => Math.random() - 0.5);

  return (
    <div id="quiz">
      <div id="question">
        <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
        <ul id="answers">
          {shuffledAnswers.map((answer) => {
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
